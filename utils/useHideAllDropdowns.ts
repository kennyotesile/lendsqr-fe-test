import { hideOverlay } from "@/components/FullScreenOverlay";
import { switchOrgDropdownState } from "@/states/sideNavStates";
import { showNumberOfUsersShownDropdownState, showFiltersDropdownState, showMoreActionsDropdownState } from "@/states/usersStates";
import { useSetRecoilState } from "recoil";

export default function useHideAllDropdowns() {
  const setShowNumberOfUsersShownDropdown = useSetRecoilState(showNumberOfUsersShownDropdownState);
  const setShowMoreActionsDropdown = useSetRecoilState(showMoreActionsDropdownState);
  const setShowFiltersDropdown = useSetRecoilState(showFiltersDropdownState);
  const setSwitchOrgDropdown = useSetRecoilState(switchOrgDropdownState);

  return function hideAllDropdowns() {
    setShowNumberOfUsersShownDropdown(false);
    setShowMoreActionsDropdown(false);
    setShowFiltersDropdown(false);
    setSwitchOrgDropdown(false);
    hideOverlay();
  }
}