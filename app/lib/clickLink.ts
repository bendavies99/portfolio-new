export const clickLink = (extLink: string, target: string | undefined = undefined) => {
    if (extLink.startsWith('/')) {
        navigateTo(extLink);
        // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        // window.history.replaceState(null, null as any, ' ');
        return;
    }

    const a = document.createElement('a');
    a.href = extLink;
    if (target) {
        a.target = target;
    }
    a.style.display = 'none';
    document.body.append(a);
    a.click();
    document.body.removeChild(a);
}
