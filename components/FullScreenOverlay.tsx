interface Props {
    onClick: () => void;
}

export function hideOverlay() {
    document.querySelector('#fullScreenOverlay')?.classList.add('hidden');
}

export function showOverlay() {
    document.querySelector('#fullScreenOverlay')?.classList.remove('hidden');
}

export default function FullScreenOverlay({ onClick }: Props) {
    return (
        <div id="fullScreenOverlay" onClick={onClick} className='absolute z-10 h-screen w-screen hidden bg-transparent'></div>
    );
}