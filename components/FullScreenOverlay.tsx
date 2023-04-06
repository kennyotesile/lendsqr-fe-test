import useHideAllDropdowns from "@/utils/useHideAllDropdowns";

export function hideOverlay() {
    document.querySelector('#fullScreenOverlay')?.classList.add('hidden');
}

export function showOverlay() {
    document.querySelector('#fullScreenOverlay')?.classList.remove('hidden');
}

export default function FullScreenOverlay() {
    const hideAllDropdowns = useHideAllDropdowns();
    
    return (
        <div id="fullScreenOverlay" onClick={hideAllDropdowns} className='absolute z-30 h-screen w-screen hidden bg-transparent'></div>
    );
}