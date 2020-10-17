import { GuardInit, authorizeInit, useGuardInit } from "blitz-guard"
import ability from "app/guard/ability"
import getAbility from "app/guard/queries/getAbility"

const Guard = GuardInit(ability)

export const authorize = authorizeInit(Guard)
// eslint-disable-next-line react-hooks/rules-of-hooks
export const useGuard = useGuardInit(getAbility)
export default Guard
