import { AppState } from '../AppState.js'
import { audience, clientId, domain } from '../env.js'
import { api } from '../services/AxiosService.js'
import { logger } from '../utils/Logger.js'

// @ts-ignore
// eslint-disable-next-line no-undef
export const AuthService = Auth0Provider.initialize({
  domain,
  clientId,
  audience,
  useRefreshTokens: true,
  onRedirectCallback: appState => {
    window.location.replace(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    )
  }
})

export function AuthGuard(next) {
  if (!AuthService || AuthService.loading) {
    return setTimeout(() => AuthGuard(next), 750)
  }
  return AuthService.isAuthenticated ? next() : AuthService.loginWithRedirect()
}

AuthService.on(AuthService.AUTH_EVENTS.AUTHENTICATED, async () => {
  api.defaults.headers.authorization = AuthService.bearer
  api.interceptors.request.use(refreshAuthToken)
  AuthService.user.id = AuthService.user[audience + '/id']
  AppState.user = AuthService.user
  console.log(AuthService.user.nickname, 'Authenticated')
  // await accountService.getAccount()
})

async function refreshAuthToken(config) {
  if (!AuthService.isAuthenticated) { return config }
  const expires = AuthService.identity.exp * 1000
  const expired = expires < Date.now()
  const needsRefresh = expires < Date.now() + (1000 * 60 * 60 * 12)
  if (expired) {
    await AuthService.loginWithPopup()
  } else if (needsRefresh) {
    await AuthService.getTokenSilently()
  }
  api.defaults.headers.authorization = AuthService.bearer
  return config
}
