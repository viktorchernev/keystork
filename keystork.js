const enabled = true;
const version = "0.1";

const domain = window.location.hostname;
if (domain === 'xvideos.com' || domain.endsWith('.xvideos.com') ||
	domain === 'xnxx.com' || domain.endsWith('.xnxx.com'))
{
	const video = document.querySelector('video');
	document.addEventListener('keydown', event => {

		if (!enabled)
		{
			return;
		}
		// Do not interfere with text entry or browser and operating-system shortcuts.
		else if (event.altKey || event.ctrlKey || event.metaKey || event.repeat)
		{
			return;
		}
		// else if (event.target instanceof HTMLElement &&
		// (event.target.isContentEditable ||
		// ['INPUT', 'TEXTAREA', 'SELECT'].includes(event.target.tagName)))
		// {
			// return;
		// }
		else if (event.key === 'ArrowRight')
		{
			video.currentTime += 5;
			event.preventDefault();
		}
		else if (event.key === 'ArrowLeft')
		{
			video.currentTime -= 5;
			event.preventDefault();
		}
		else if (event.key === 'ArrowUp')
		{
			if (video.muted) video.muted = false;
			video.volume = Math.min(1, video.volume + 0.1);
			event.preventDefault();
		}
		else if (event.key === 'ArrowDown')
		{
			if (video.muted) video.muted = false;
			video.volume = Math.max(0, video.volume - 0.1);
			event.preventDefault();
		}
		else if (event.code === 'Space') 
		{
			event.preventDefault();
			if (video.paused) video.play();
			else video.pause();
		}
		else if (event.key === 'm')
		{
			video.muted = !video.muted;
		}
	});
	console.log('Keystork v' + version + ': Keyboard controls ready.');
}