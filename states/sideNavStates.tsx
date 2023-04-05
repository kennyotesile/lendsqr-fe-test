import { atom } from "recoil";

export const switchOrgDropdownState = atom<boolean>({
    key: 'switchOrgDropdownState',
    default: false
});