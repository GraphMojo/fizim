export function notFound(): string {
	return `
		<!DOCTYPE html>
		<html>
			<head>
				<meta charset="UTF-8" />
				<title>404 | Not found | The url doesn't exist</title>
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-L1E106KKX9"></script>
				<script>
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-L1E106KKX9', {
						'transport_type': 'beacon'
					});
				</script>
			</head>
			<body>
				<h1 style="font-size: 16px">Sorry. The url you're looking for doesn't exist</h1>
			</body>
		</html>
	`;
}

export function serverError(): string {
	return `
		<!DOCTYPE html>
		<html>
			<head>
				<meta charset="UTF-8" />
				<title>500 | Internal server error</title>
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-L1E106KKX9"></script>
				<script>
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-L1E106KKX9', {
						'transport_type': 'beacon'
					});
				</script>
			</head>
			<body>
				<h1 style="font-size: 16px">Bruh!! Try again</h1>
			</body>
		</html>
	`;
}

export function redirectWithRetargetting(ga_ID: string, targetURL: string): string {
	return `
		<!DOCTYPE html>
		<html>
			<head>
				<meta charset="UTF-8" />
				<title>Redirecting in a moment</title>
				<script async src="https://www.googletagmanager.com/gtag/js?id=${ga_ID}"></script>
				<script>
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', '${ga_ID}', {
						'transport_type': 'beacon'
					});
					gtag('event', 'fizim_${targetURL.replace(/http(s)?:\/\/(www\.)?/,'').substring(0,33)}', {
						'page_location': '${targetURL.substring(0, 1000)}'
					});
					gtag('config', 'G-L1E106KKX9', {
						'transport_type': 'beacon'
					});
				</script>
				<noscript>
					<meta http-equiv="refresh" content="1;url=${targetURL}">
				</noscript>
			</head>
			<body>
				<h1 style="font-size: 16px">You will be redirected to <a href="${targetURL}">${targetURL}</a> in a moment.</h1>
				<script>
					window.setTimeout(2000, () => { window.location.replace("${targetURL}") });
				</script>
			</body>
		</html>

	`
}