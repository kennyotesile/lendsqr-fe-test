import { atom } from "recoil";

export const showNumberOfUsersShownDropdownState = atom<boolean>({
    key: 'showNumberOfUsersShownDropdownState',
    default: false
});

export const showMoreActionsDropdownState = atom<boolean>({
    key: 'showMoreActionsDropdownState',
    default: false
});

export const showFiltersDropdownState = atom<boolean>({
    key: 'showFiltersDropdownState',
    default: false
});
