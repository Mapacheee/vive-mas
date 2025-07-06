import { activeLink } from './stores';

export function setActiveLink(link: string) {
    activeLink.set(link);
}