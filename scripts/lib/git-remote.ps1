function Get-ForkOwner {
    $originUrl = git remote get-url origin 2>$null
    if (-not $originUrl) {
        throw "origin 원격이 없습니다. 본인 포크를 clone 했는지 확인하세요."
    }

    if ($originUrl -match 'github\.com[:/](?<owner>[^/]+)/') {
        return $Matches.owner
    }

    throw "origin URL에서 GitHub 사용자/조직을 찾을 수 없습니다: $originUrl"
}

function Get-ForkRepoUrl {
    $owner = Get-ForkOwner
    return "https://github.com/$owner/2026-kookmin-ai-workflow-team3"
}
