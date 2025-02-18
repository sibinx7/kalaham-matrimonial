<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>School Management</title>

	<!-- Fonts -->
	<link rel="preconnect" href="https://fonts.bunny.net">
	<link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

	<!-- Styles / Scripts -->
	@if (file_exists(public_path('build/manifest.json')) || file_exists(public_path('hot')))
	@vite(['resources/css/app.css', 'resources/js/app.js'])
	@else
	<style></style>
	@endif
</head>

<body class="font-sans antialiased dark:bg-black dark:text-white/50">
	<div class="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">

		<main class="mt-6">

		</main>

		<footer class="py-16 text-center text-sm text-black dark:text-white/70">			
		</footer>
	</div>
	</div>
	</div>
</body>

</html>