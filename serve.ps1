# serve.ps1
# Um servidor web simples e leve em PowerShell para rodar o projeto localmente e evitar problemas de CORS.

$port = 8000
$url = "http://localhost:$port/"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($url)

try {
    $listener.Start()
    Write-Host "=========================================" -ForegroundColor Green
    Write-Host " Servidor local LANA iniciado com sucesso! " -ForegroundColor Green
    Write-Host "=========================================" -ForegroundColor Green
    Write-Host "Disponivel em: $url" -ForegroundColor Cyan
    Write-Host "Pressione CTRL+C no terminal para parar o servidor." -ForegroundColor Yellow
    Write-Host ""
    
    # Abre o navegador padrao no endereco do projeto
    Start-Process $url
    
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $req = $context.Request
        $res = $context.Response
        
        try {
            # Mapeamento do caminho local
            $path = $req.Url.LocalPath
            if ($path -eq "/") {
                $path = "/index.html"
            }
            
            # Remove barras iniciais extras ou resolve o caminho relativo ao diretorio atual
            $relativePath = $path.TrimStart('/')
            $filePath = [System.IO.Path]::Combine($pwd.Path, $relativePath)
            
            if (Test-Path $filePath -PathType Leaf) {
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                $contentType = switch ($ext) {
                    ".html" { "text/html; charset=utf-8" }
                    ".css"  { "text/css; charset=utf-8" }
                    ".js"   { "application/javascript; charset=utf-8" }
                    ".jsx"  { "text/babel; charset=utf-8" }
                    ".png"  { "image/png" }
                    ".jpg"  { "image/jpeg" }
                    ".jpeg" { "image/jpeg" }
                    ".svg"  { "image/svg+xml; charset=utf-8" }
                    ".json" { "application/json; charset=utf-8" }
                    default { "application/octet-stream" }
                }
                
                $bytes = [System.IO.File]::ReadAllBytes($filePath)
                $res.ContentType = $contentType
                $res.ContentLength64 = $bytes.Length
                
                if ($req.HttpMethod -ne "HEAD") {
                    $res.OutputStream.Write($bytes, 0, $bytes.Length)
                }
                Write-Host "[200] Servido: $path ($contentType)" -ForegroundColor Gray
            } else {
                $res.StatusCode = 404
                $notFoundMsg = [System.Text.Encoding]::UTF8.GetBytes("404 - Arquivo nao encontrado.")
                $res.ContentLength64 = $notFoundMsg.Length
                if ($req.HttpMethod -ne "HEAD") {
                    $res.OutputStream.Write($notFoundMsg, 0, $notFoundMsg.Length)
                }
                Write-Host "[404] Nao encontrado: $path" -ForegroundColor Yellow
            }
        } catch {
            Write-Host "Erro ao processar requisicao para $path : $_" -ForegroundColor Red
            try {
                if ($res -and -not $res.OutputStream.CanWrite) {
                    $res.StatusCode = 500
                }
            } catch {}
        } finally {
            if ($res) {
                try {
                    $res.OutputStream.Close()
                } catch {}
            }
        }
    }
} catch {
    Write-Host "Erro ao iniciar o servidor: $_" -ForegroundColor Red
} finally {
    $listener.Stop()
    $listener.Close()
}
