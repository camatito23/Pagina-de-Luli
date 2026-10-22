## 2026-09-17 23:23:19.336Z load
- url: http://localhost:3000/

## 2026-09-17 23:29:20.417Z load
- url: http://localhost:3000/

## 2026-09-28 22:30:14.753Z load
- url: http://localhost:3000/

## 2026-09-28 22:30:31.381Z click
- element: {"tag":"html","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"\n\t\timport { injectIntoGlobalHook } from \"/@react-refresh\";\ninjectIntoGlobalHook(window);\nwindow.$RefreshReg$ = () => {};\nwindow.$RefreshSig$ = () => (type) => type;\n\n\t\t\n\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\n\t\tconst SITE_PAGES_ENDPOINT = '/__horizons/site-pages';\n\nconst OUTGOING_SITE_PAGES_MESSAGE = 'sitePages';\nconst INCOMING_REQUEST_SITE_PAGES_MESSAGE = 'request-site-pages';\n\nconst ALLOWED_PARENT_ORIGINS = [\n\t'https://horizons.hostinger.com',\n\t'https://horizons.hostinger.dev',\n\t'https://horizons-frontend-local.hostinger.dev',\n\t'http://localhost:4000',\n];\n\nfunction postSitePages(pages) {\n\tlet parentOrigin = window.location.ancestorOrigins?.[0];\n\tif (!parentOrigin && document.referrer) {\n\t\ttry {\n\t\t\tparentOrigin = new URL(document.referrer).origin;\n\t\t} catch {}\n\t}\n\tif (parentOrigin && ALLOWED_PARENT_ORIGINS.includes(parentOrigin)) {\n\t\twindow.parent.postMessage({ type: OUTGOING_SITE_PAGES_MESSAGE, payload: { pages } }, parentOrigin);\n\t}\n}\n\nasync function sendSitePagesToParent() {\n\tif (window.self === window.top) {\n\t\treturn;\n\t}\n\n\ttry {\n\t\tconst response = await fetch(SITE_PAGES_ENDPOINT);\n\t\tif (!response.ok) {\n\t\t\tthrow new Error(`HTTP ${response.status}`);\n\t\t}\n\t\tpostSitePages(await response.json());\n\t} catch (error) {\n\t\tconsole.error('[site-pages] Failed to send site pages to parent:', error);\n\t}\n}\n\nif (window.self !== window.top) {\n\twindow.addEventListener('load', sendSitePagesToParent);\n\twindow.addEventListener('message', (event) => {\n\t\tif (event.data?.type === INCOMING_REQUEST_SITE_PAGES_MESSAGE) {\n\t\t\tsendSitePagesToParent();\n\t\t}\n\t});\n}\n\n\t\t\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id],\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-assisted-id] {\n\t\tcursor: default !important;\n\t\toverflow-wrap: anywhere;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id][contenteditable=\"true\"],\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-assisted-id][contenteditable=\"true\"] {\n\t\toutline: 1px solid #673DE6;\n\t\tcaret-color: currentColor;\n\t\tuser-select: text;\n\t\t-webkit-user-select: text;\n\t\tcu..."}

## 2026-09-28 22:30:38.745Z load
- url: http://localhost:3000/

## 2026-09-28 22:33:38.492Z load
- url: http://localhost:3000/

## 2026-09-28 22:33:38.710Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-09-28 22:33:42.915Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Inicio"}

## 2026-09-28 22:33:43.594Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Inicio"}

## 2026-09-28 22:33:44.186Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Inicio"}

## 2026-09-28 23:01:10.994Z load
- url: http://localhost:3000/

## 2026-09-28 23:01:12.490Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-09-28 23:01:29.076Z click
- element: {"tag":"a","role":null,"ariaLabel":"Deslizar hacia abajo","name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-09-28 23:01:29.077Z navigate
- url: http://localhost:3000/#detalles
- via: popstate

## 2026-09-28 23:06:22.900Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Inicio"}

## 2026-09-28 23:55:10.649Z load
- url: http://localhost:3000/#detalles

## 2026-09-28 23:55:10.941Z navigate
- url: http://localhost:3000/#detalles
- via: replaceState

## 2026-09-28 23:55:14.716Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"2027Viernes 8 de EneroLuliMis 15 AñosFaltan...102DÍAS00HORAS34MIN45SEG"}

## 2026-09-29 00:00:03.400Z window.error
- message: Uncaught ReferenceError: Page is not defined
- source: http://localhost:3000/src/pages/builder/home/HomePage.jsx?t=1790640000554
- line: 3
- col: 33
- stack: 
    ReferenceError: Page is not defined
        at HomePage (http://localhost:3000/src/pages/builder/home/HomePage.jsx?t=1790640000554:3:33)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:11596:26)
        at updateFunctionComponent (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:14630:28)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:15972:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:19818:15)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:19190:13)

## 2026-09-29 00:00:03.429Z window.error
- message: Uncaught ReferenceError: Page is not defined
- source: http://localhost:3000/src/pages/builder/home/HomePage.jsx?t=1790640000554
- line: 3
- col: 33
- stack: 
    ReferenceError: Page is not defined
        at HomePage (http://localhost:3000/src/pages/builder/home/HomePage.jsx?t=1790640000554:3:33)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:11596:26)
        at updateFunctionComponent (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:14630:28)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:15972:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:19818:15)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:19190:13)

## 2026-09-29 00:00:03.436Z console.error
- text: 
    The above error occurred in the <HomePage> component:
    
        at HomePage (http://localhost:3000/src/pages/builder/home/HomePage.jsx?t=1790640000554:3:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=4effc282:6736:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=4effc282:7668:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=4effc282:7607:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=4effc282:10915:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-2TTCGUWQ.js?v=4effc282:45:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=4effc282:72:5)
        at App
    
    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

## 2026-09-29 00:00:03.467Z unhandledrejection
- message: Page is not defined
- stack: 
    ReferenceError: Page is not defined
        at HomePage (http://localhost:3000/src/pages/builder/home/HomePage.jsx?t=1790640000554:3:33)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:11596:26)
        at updateFunctionComponent (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:14630:28)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:15972:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:18786:28)
        at performSyncWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:18932:28)

## 2026-09-29 00:00:03.755Z root.empty
- url: http://localhost:3000/#detalles

## 2026-09-29 00:00:06.098Z click
- element: {"tag":"html","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"\n\t\timport { injectIntoGlobalHook } from \"/@react-refresh\";\ninjectIntoGlobalHook(window);\nwindow.$RefreshReg$ = () => {};\nwindow.$RefreshSig$ = () => (type) => type;\n\n\t\t\n\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\n\t\tconst SITE_PAGES_ENDPOINT = '/__horizons/site-pages';\n\nconst OUTGOING_SITE_PAGES_MESSAGE = 'sitePages';\nconst INCOMING_REQUEST_SITE_PAGES_MESSAGE = 'request-site-pages';\n\nconst ALLOWED_PARENT_ORIGINS = [\n\t'https://horizons.hostinger.com',\n\t'https://horizons.hostinger.dev',\n\t'https://horizons-frontend-local.hostinger.dev',\n\t'http://localhost:4000',\n];\n\nfunction postSitePages(pages) {\n\tlet parentOrigin = window.location.ancestorOrigins?.[0];\n\tif (!parentOrigin && document.referrer) {\n\t\ttry {\n\t\t\tparentOrigin = new URL(document.referrer).origin;\n\t\t} catch {}\n\t}\n\tif (parentOrigin && ALLOWED_PARENT_ORIGINS.includes(parentOrigin)) {\n\t\twindow.parent.postMessage({ type: OUTGOING_SITE_PAGES_MESSAGE, payload: { pages } }, parentOrigin);\n\t}\n}\n\nasync function sendSitePagesToParent() {\n\tif (window.self === window.top) {\n\t\treturn;\n\t}\n\n\ttry {\n\t\tconst response = await fetch(SITE_PAGES_ENDPOINT);\n\t\tif (!response.ok) {\n\t\t\tthrow new Error(`HTTP ${response.status}`);\n\t\t}\n\t\tpostSitePages(await response.json());\n\t} catch (error) {\n\t\tconsole.error('[site-pages] Failed to send site pages to parent:', error);\n\t}\n}\n\nif (window.self !== window.top) {\n\twindow.addEventListener('load', sendSitePagesToParent);\n\twindow.addEventListener('message', (event) => {\n\t\tif (event.data?.type === INCOMING_REQUEST_SITE_PAGES_MESSAGE) {\n\t\t\tsendSitePagesToParent();\n\t\t}\n\t});\n}\n\n\t\t\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id],\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-assisted-id] {\n\t\tcursor: default !important;\n\t\toverflow-wrap: anywhere;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id][contenteditable=\"true\"],\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-assisted-id][contenteditable=\"true\"] {\n\t\toutline: 1px solid #673DE6;\n\t\tcaret-color: currentColor;\n\t\tuser-select: text;\n\t\t-webkit-user-select: text;\n\t\tcu..."}

## 2026-09-29 00:09:19.302Z click
- element: {"tag":"section","role":null,"ariaLabel":"Invitación Luli 15","name":null,"type":null,"id":"hero","placeholder":null,"label":null,"value":null,"valueLength":0,"text":"2027Viernes 8 de EneroLuliMis 15 AñosFaltan...102DÍAS00HORAS20MIN40SEG"}

## 2026-09-29 00:09:57.951Z click
- element: {"tag":"button","role":null,"ariaLabel":"Open menu","name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-09-29 00:09:58.629Z click
- element: {"tag":"button","role":null,"ariaLabel":"Close menu","name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-09-29 00:09:59.446Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-09-29 00:09:59.450Z navigate
- url: http://localhost:3000/
- via: pushState

## 2026-09-29 00:11:01.300Z click
- element: {"tag":"section","role":null,"ariaLabel":"Invitación Luli 15","name":null,"type":null,"id":"hero","placeholder":null,"label":null,"value":null,"valueLength":0,"text":"2027Viernes 8 de EneroLuliMis 15 AñosFaltan...102DÍAS00HORAS18MIN58SEG"}

## 2026-09-29 00:14:37.471Z click
- element: {"tag":"main","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"2027Viernes 8 de EneroLuliMis 15 AñosFaltan...102DÍAS00HORAS15MIN22SEGNuestra CelebraciónPara que no te pierdas ningún detalle de esta noche inolvidable, aquí te dejamos la información más importante.Fecha y HorarioViernes 8 de Enero de 2027. La recepción comenzará a las 21:30 hs.UbicaciónSalón de Eventos Jano's Campana. Te esperamos para celebrar.Dress CodeElegante Formal. Vestido Largo y Traje completo / Smoking.VER MAPA DE UBICACIÓNMomentos para el recuerdoNuestra historia en imágenesUna selección de retratos luminosos y composiciones de recuerdos que capturan la esencia de este hermoso camino hacia mis 15 años.Lluvia de SobresAgradecemos profundamente su presencia como el mejor regalo. Para quienes deseen contribuir, una urna estará disponible en el salón, o pueden hacerlo mediante transferencia.AliasLULI.XV.CBUCBU1234567890123456789012¡CONFIRMA  TU ASISTENCIA!Para el XV de Luli, el VIERNES 8 DE ENERO - 2027CONFIRMAR VÍA WHATSAPPPor favor, confirma antes  del 15 de diciembre"}

## 2026-10-01 20:44:29.782Z load
- url: http://localhost:3000/

## 2026-10-01 20:44:31.390Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-10-01 20:44:34.135Z click
- element: {"tag":"main","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"2027Viernes 8 de EneroLuliMis 15 AñosFaltan...99DÍAS03HORAS45MIN26SEGNuestra CelebraciónPara que no te pierdas ningún detalle de esta noche inolvidable, aquí te dejamos la información más importante.Fecha y HorarioViernes 8 de Enero de 2027. La recepción comenzará a las 21:30 hs.UbicaciónSalón de Eventos Jano's Campana. Te esperamos para celebrar.Dress CodeElegante Formal. Vestido Largo y Traje completo / Smoking.VER MAPA DE UBICACIÓNMomentos para el recuerdoNuestra historia en imágenesUna selección de retratos luminosos y composiciones de recuerdos que capturan la esencia de este hermoso camino hacia mis 15 años.Lluvia de SobresAgradecemos profundamente su presencia como el mejor regalo. Para quienes deseen contribuir, una urna estará disponible en el salón, o pueden hacerlo mediante transferencia.AliasLULI.XV.CBUCBU1234567890123456789012¡CONFIRMA  TU ASISTENCIA!Para el XV de Luli, el VIERNES 8 DE ENERO - 2027CONFIRMAR VÍA WHATSAPPPor favor, confirma antes  del 15 de diciembre"}

## 2026-10-01 20:44:50.772Z click
- element: {"tag":"a","role":null,"ariaLabel":"Deslizar hacia abajo","name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-01 20:44:50.774Z navigate
- url: http://localhost:3000/#detalles
- via: popstate

## 2026-10-01 20:47:44.232Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Inicio"}

## 2026-10-01 20:51:23.392Z load
- url: http://localhost:3000/#detalles

## 2026-10-01 20:51:23.887Z navigate
- url: http://localhost:3000/#detalles
- via: replaceState

## 2026-10-01 20:56:15.656Z console.error
- text: [vite] Failed to reload /src/pages/builder/home/HomePage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-01 20:56:58.238Z load
- url: http://localhost:3000/#detalles

## 2026-10-01 20:58:45.764Z load
- url: http://localhost:3000/#detalles

## 2026-10-01 20:59:26.435Z load
- url: http://localhost:3000/#detalles

## 2026-10-01 20:59:35.628Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Inicio2027Viernes 8 de EneroLuliMis 15 AñosFaltan...99DÍAS03HORAS30MIN24SEGNuestra CelebraciónPara que no te pierdas ningún detalle de esta noche inolvidable, aquí te dejamos la información más importante.Fecha y HorarioViernes 8 de Enero de 2027. La recepción comenzará a las 21:30 hs.UbicaciónSalón de Eventos Jano's Campana. Te esperamos para celebrar.Dress CodeElegante Formal. Vestido Largo y Traje completo / Smoking.VER MAPA DE UBICACIÓNMomentos para el recuerdoNuestra historia en imágenesUna selección de retratos luminosos y composiciones de recuerdos que capturan la esencia de este hermoso camino hacia mis 15 años.Lluvia de SobresAgradecemos profundamente su presencia como el mejor regalo. Para quienes deseen contribuir, una urna estará disponible en el salón, o pueden hacerlo mediante transferencia.AliasLULI.XV.CBUCBU1234567890123456789012¡CONFIRMA  TU ASISTENCIA!Para el XV de Luli, el VIERNES 8 DE ENERO - 2027CONFIRMAR VÍA WHATSAPPPor favor, confirma antes  del 15 de diciembre\n\t\t\t\t\t\t.grid-shape[data-element-id=\"X4m-cX\"] svg {\n\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\theight: 100%;\n\t\t\t\t\t\t\tfill: var(--shape-color);\n\t\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t\t.grid-shape[data-element-id=\"tRM-Na\"] svg {\n\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\theight: 100%;\n\t\t\t\t\t\t\tfill: var(--shape-color);\n\t\t\t\t\t\t}\n\t\t\t\t\tLuli — Mis 15 AñosUna noche inolvidable llena de música, risas y recuerdos compartidos.Invitación© 2026 Luli — Mis 15 Años-Te espero para celebrar juntos una noche inolvidable.Mis 15 Años — Luli"}

## 2026-10-01 20:59:52.555Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"2027Viernes 8 de EneroLuliMis 15 AñosFaltan...99DÍAS03HORAS30MIN07SEG"}

## 2026-10-01 21:00:50.899Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"2027Viernes 8 de EneroLuliMis 15 AñosFaltan...99DÍAS03HORAS29MIN09SEG"}

## 2026-10-01 21:37:29.218Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"\n\t\t\t\t\t\t.grid-shape[data-element-id=\"X4m-cX\"] svg {\n\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\theight: 100%;\n\t\t\t\t\t\t\tfill: var(--shape-color);\n\t\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t\t.grid-shape[data-element-id=\"tRM-Na\"] svg {\n\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\theight: 100%;\n\t\t\t\t\t\t\tfill: var(--shape-color);\n\t\t\t\t\t\t}\n\t\t\t\t\tLuli — Mis 15 AñosUna noche inolvidable llena de música, risas y recuerdos compartidos.Invitación© 2026 Luli — Mis 15 Años-Te espero para celebrar juntos una noche inolvidable.Mis 15 Años — Luli"}

## 2026-10-01 21:38:34.047Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-01 21:38:34.051Z navigate
- url: http://localhost:3000/
- via: pushState

## 2026-10-01 21:45:37.957Z click
- element: {"tag":"section","role":null,"ariaLabel":null,"name":null,"type":null,"id":"galeria-y-regalos","placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Nuestra historia en imágenesMomentos para el recuerdoLluvia de SobresAgradecemos profundamente su presencia como el mejor regalo. Para quienes deseen contribuir, una urna estará disponible en el salón, o mediante transferencia.AliasLULI.XV.CBUCBU1234567890123456789012"}

## 2026-10-01 21:45:38.650Z click
- element: {"tag":"img","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-01 21:54:40.281Z click
- element: {"tag":"img","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-01 21:54:45.007Z click
- element: {"tag":"img","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-01 21:54:54.753Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Luli2027Viernes 8 de EneroMis 15 AñosFaltan...99DÍAS02HORAS35MIN05SEGNuestra CelebraciónPara que no te pierdas ningún detalle de esta noche inolvidable.Fecha y HorarioViernes 8 de Enero de 2027. La recepción comenzará a las 21:30 hs.UbicaciónSalón de Eventos Jano's Campana. Te esperamos para celebrar.Dress CodeElegante Formal. Vestido Largo y Traje completo.VER MAPA DE UBICACIÓNNuestra historia en imágenesMomentos para el recuerdoLluvia de SobresAgradecemos profundamente su presencia como el mejor regalo. Para quienes deseen contribuir, una urna estará disponible en el salón, o mediante transferencia.AliasLULI.XV.CBUCBU1234567890123456789012¡CONFIRMA  TU ASISTENCIA!Para mi fiesta, el VIERNES 8 DE ENEROVÍA WHATSAPPConfirmar antes del 15 de diciembre\n\t\t\t\t\t\t.grid-shape[data-element-id=\"X4m-cX\"] svg {\n\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\theight: 100%;\n\t\t\t\t\t\t\tfill: var(--shape-color);\n\t\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t\t.grid-shape[data-element-id=\"tRM-Na\"] svg {\n\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\theight: 100%;\n\t\t\t\t\t\t\tfill: var(--shape-color);\n\t\t\t\t\t\t}\n\t\t\t\t\tLuli — Mis 15 AñosUna noche inolvidable llena de música, risas y recuerdos compartidos.Invitación© 2026 Luli — Mis 15 Años-Te espero para celebrar juntos una noche inolvidable.Mis 15 Años — Luli"}

## 2026-10-01 22:02:29.320Z click
- element: {"tag":"img","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-01 22:08:17.749Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Lluvia de SobresAgradecemos profundamente su presencia como el mejor regalo. Para quienes deseen contribuir, una urna estará disponible en el salón, o mediante transferencia.AliasLULI.XV.CBUCBU1234567890123456789012"}

## 2026-10-01 22:11:15.819Z click
- element: {"tag":"img","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-01 22:38:04.298Z click
- element: {"tag":"img","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-01 22:39:17.601Z click
- element: {"tag":"svg","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-01 22:39:18.808Z click
- element: {"tag":"article","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Dress codeElegante formal. Vestido largo y traje completo o smoking."}

## 2026-10-01 22:46:13.933Z click
- element: {"tag":"img","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-01 22:51:36.280Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Luli2027Viernes 8 de EneroMis 15 AñosFaltan...99DÍAS01HORAS38MIN23SEG"}

## 2026-10-01 22:53:14.545Z load
- url: http://localhost:3000/

## 2026-10-01 22:54:08.114Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Luli2027Viernes 8 de EneroMis 15 AñosFaltan...99DÍAS01HORAS35MIN52SEG"}

## 2026-10-01 22:54:13.592Z load
- url: http://localhost:3000/

## 2026-10-01 23:24:18.413Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"2027Viernes 8 de EneroMis 15 AñosFaltan...99DÍAS01HORAS05MIN42SEG"}

## 2026-10-01 23:24:19.017Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"2027Viernes 8 de EneroMis 15 AñosFaltan...99DÍAS01HORAS05MIN41SEG"}

## 2026-10-01 23:24:25.178Z click
- element: {"tag":"img","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-01 23:24:33.491Z click
- element: {"tag":"img","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-01 23:43:10.234Z click
- element: {"tag":"h2","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Detalles del la noche"}

## 2026-10-01 23:43:23.451Z click
- element: {"tag":"section","role":null,"ariaLabel":null,"name":null,"type":null,"id":"detalles","placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Detalles del la nochePara que no te pierdas ningún detalle de esta noche inolvidable.Fecha y horarioViernes 8 de enero de 2027. La recepción comenzará a las 21:30 hs.UbicaciónSalón de Eventos Jano's, Campana. Te esperamos para celebrar.VER MAPA DE UBICACIÓNDress codeElegante formal. Vestido largo y traje completo o smoking."}

## 2026-10-01 23:44:14.778Z click
- element: {"tag":"img","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-01 23:52:19.477Z click
- element: {"tag":"h2","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Detalles de la noche"}

## 2026-10-01 23:55:03.091Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"2027Viernes 8 de EneroMis 15 AñosFaltan...99DÍAS00HORAS34MIN57SEG"}

## 2026-10-01 23:55:06.546Z click
- element: {"tag":"img","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-01 23:55:07.114Z click
- element: {"tag":"img","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-01 23:55:07.721Z click
- element: {"tag":"img","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-01 23:55:08.521Z click
- element: {"tag":"img","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-01 23:55:09.202Z click
- element: {"tag":"img","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-01 23:55:09.777Z click
- element: {"tag":"img","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-01 23:55:11.633Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Mis 15 Años"}

## 2026-10-02 00:00:35.355Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"VER MAPA DE UBICACIÓN"}

## 2026-10-02 00:00:44.003Z click
- element: {"tag":"article","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Dress codeElegante formal. Vestido largo y traje completo o smoking."}

## 2026-10-02 00:06:18.058Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ver ejemplos de Dress Code"}

## 2026-10-02 00:06:26.228Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ver en Google Maps"}

## 2026-10-02 00:09:05.974Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ver en Google Maps"}

## 2026-10-02 00:10:44.135Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ver ejemplos de Dress Code"}

## 2026-10-02 00:10:53.507Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ver ejemplos de Dress Code"}

## 2026-10-02 00:11:12.300Z load
- url: http://localhost:3000/

## 2026-10-02 00:11:12.624Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-10-02 00:11:16.566Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ver ejemplos de Dress Code"}

## 2026-10-02 00:12:10.412Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ver en Google Maps"}

## 2026-10-02 00:12:17.302Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ver ejemplos de Dress Code"}

## 2026-10-02 00:13:21.476Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ver ejemplos de Dress Code"}

## 2026-10-02 00:13:30.861Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ver ejemplos de Dress Code"}

## 2026-10-02 00:13:32.910Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ver ejemplos de Dress Code"}

## 2026-10-02 00:13:33.451Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ver ejemplos de Dress Code"}

## 2026-10-02 00:13:34.412Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ver en Google Maps"}

## 2026-10-02 00:13:38.669Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ver ejemplos de Dress Code"}

## 2026-10-02 00:13:39.964Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ver ejemplos de Dress Code"}

## 2026-10-02 00:13:41.019Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ver ejemplos de Dress Code"}

## 2026-10-02 00:13:42.820Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ver ejemplos de Dress Code"}

## 2026-10-02 00:14:04.651Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ver ejemplos de Dress Code"}

## 2026-10-02 00:17:20.821Z window.error
- message: Uncaught ReferenceError: miImagen is not defined
- source: http://localhost:3000/src/pages/builder/home/Section3.jsx?t=1790900237794
- line: 131
- col: 67
- stack: 
    ReferenceError: miImagen is not defined
        at http://localhost:3000/src/pages/builder/home/Section3.jsx?t=1790900237794:131:67
        at Array.map (<anonymous>)
        at Section3 (http://localhost:3000/src/pages/builder/home/Section3.jsx?t=1790900237794:92:121)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:11596:26)
        at updateFunctionComponent (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:14630:28)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:15972:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:19818:15)

## 2026-10-02 00:17:21.138Z window.error
- message: Uncaught ReferenceError: miImagen is not defined
- source: http://localhost:3000/src/pages/builder/home/Section3.jsx?t=1790900237794
- line: 131
- col: 67
- stack: 
    ReferenceError: miImagen is not defined
        at http://localhost:3000/src/pages/builder/home/Section3.jsx?t=1790900237794:131:67
        at Array.map (<anonymous>)
        at Section3 (http://localhost:3000/src/pages/builder/home/Section3.jsx?t=1790900237794:92:121)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:11596:26)
        at updateFunctionComponent (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:14630:28)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:15972:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:19818:15)

## 2026-10-02 00:17:21.168Z console.error
- text: 
    The above error occurred in the <Section3> component:
    
        at Section3 (http://localhost:3000/src/pages/builder/home/Section3.jsx?t=1790900237794:92:121)
        at div
        at div
        at div
        at main
        at Page (http://localhost:3000/src/components/builder/Page.jsx?t=1790892104525:18:3)
        at HomePage
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=4effc282:6736:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=4effc282:7668:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=4effc282:7607:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=4effc282:10915:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-2TTCGUWQ.js?v=4effc282:45:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=4effc282:72:5)
        at App
    
    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

## 2026-10-02 00:17:21.203Z unhandledrejection
- message: miImagen is not defined
- stack: 
    ReferenceError: miImagen is not defined
        at http://localhost:3000/src/pages/builder/home/Section3.jsx?t=1790900237794:131:67
        at Array.map (<anonymous>)
        at Section3 (http://localhost:3000/src/pages/builder/home/Section3.jsx?t=1790900237794:92:121)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:11596:26)
        at updateFunctionComponent (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:14630:28)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:15972:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-IBKPSO55.js?v=4effc282:19169:15)

## 2026-10-02 00:17:21.484Z root.empty
- url: http://localhost:3000/

## 2026-10-02 00:17:28.268Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Detalles de la nochePara que no te pierdas ningún detalle de esta noche inolvidable.Fecha y horarioViernes 8 de enero de 2027. La recepción comenzará a las 21:30 hs.UbicaciónSalón de Eventos Jano's, Campana. Te esperamos para celebrar.Ver en Google MapsDress codeElegante formal. Vestido largo y traje completo o smoking.Ver ejemplos de Dress Code"}

## 2026-10-02 00:17:55.343Z console.error
- text: [vite] Failed to reload /src/pages/builder/home/Section3.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-02 00:20:30.442Z console.error
- text: [vite] Failed to reload /src/pages/builder/home/Section3.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-02 00:20:41.324Z console.error
- text: [vite] Failed to reload /src/pages/builder/home/Section3.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-02 00:20:50.089Z load
- url: http://localhost:3000/

## 2026-10-02 00:21:34.916Z load
- url: http://localhost:3000/

## 2026-10-02 00:21:43.027Z load
- url: http://localhost:3000/

## 2026-10-02 00:21:48.655Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ver ejemplos de Dress Code"}

## 2026-10-02 00:21:50.788Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ver ejemplos de Dress Code"}

## 2026-10-02 00:22:19.163Z console.error
- text: [vite] Failed to reload /src/pages/builder/home/Section3.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-02 00:22:31.613Z console.error
- text: [vite] SyntaxError: The requested module '/src/pages/builder/home/Section3.jsx?t=1790900550902' does not provide an export named 'default'

## 2026-10-02 00:22:31.618Z console.error
- text: [vite] Failed to reload /src/pages/builder/home/HomePage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-02 00:22:45.493Z console.error
- text: [vite] Failed to reload /src/pages/builder/home/HomePage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-02 00:23:04.006Z console.error
- text: [vite] Failed to reload /src/pages/builder/home/HomePage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-02 00:23:15.998Z console.error
- text: [vite] Failed to reload /src/pages/builder/home/HomePage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-02 00:24:57.804Z console.error
- text: [vite] Failed to reload /src/pages/builder/home/HomePage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-02 00:25:33.392Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"VER MAPA DE UBICACIÓN"}

## 2026-10-02 00:25:39.538Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"VER SUGERENCIA DE VESTIMENTA"}

## 2026-10-02 00:26:24.040Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"VER MAPA DE UBICACIÓN"}

## 2026-10-02 00:26:29.229Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"VER SUGERENCIA DE VESTIMENTA"}

## 2026-10-02 00:27:01.042Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"VER MAPA DE UBICACIÓN"}

## 2026-10-02 00:27:31.330Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"VER MAPA DE UBICACIÓN"}

## 2026-10-02 00:27:39.138Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"VER SUGERENCIA DE VESTIMENTA"}

## 2026-10-02 00:29:07.999Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"VER MAPA DE UBICACIÓN"}

## 2026-10-02 00:29:16.306Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"VER SUGERENCIA DE VESTIMENTA"}

## 2026-10-02 00:33:13.493Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"VER SUGERENCIA DE VESTIMENTA"}

## 2026-10-02 00:36:39.588Z click
- element: {"tag":"article","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Dress codeElegante formal. Vestido largo y traje completo o smoking."}

## 2026-10-02 00:53:55.360Z load
- url: http://localhost:3000/

## 2026-10-10 17:07:25.157Z load
- url: http://localhost:3000/

## 2026-10-10 17:22:17.910Z load
- url: http://localhost:3000/

## 2026-10-10 17:22:19.805Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-10-10 17:22:33.729Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"2027Viernes 8 de EneroMis 15 AñosFaltan...90DÍAS07HORAS07MIN27SEGDetalles de la nochePara que no te pierdas ningún detalle de esta noche inolvidable.Fecha y horarioViernes 8 de enero de 2027. La recepción comenzará a las 21:30 hs.UbicaciónSalón de Eventos Jano's, Campana. Te esperamos para celebrar.Ver mapa de ubicaciónCódigo de vestimentaElegante formal. Vestido largo y traje completo para fumar.RegalosAgradecemos profundamente su presencia como el mejor regalo. Para quienes deseen contribuir, una urna estará disponible en el salón, o mediante transferencia.AliasLULI.XV.CBUUnidad de Comando de la Ciudad1234567890123456789012¡Confirma tu asistencia!Para el XV de Luli, el viernes 8 de enero de 2027Confirmar por WhatsAppPor favor, confirma antes del 15 de diciembre."}

## 2026-10-10 17:27:50.700Z load
- url: https://xk8046tt-3000.brs.devtunnels.ms/

## 2026-10-10 17:27:52.065Z navigate
- url: https://xk8046tt-3000.brs.devtunnels.ms/
- via: replaceState

## 2026-10-10 17:29:15.545Z load
- url: https://xk8046tt-3000.brs.devtunnels.ms/

## 2026-10-10 17:30:58.377Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"2027Viernes 8 de EneroMis 15 AñosFaltan...90DÍAS06HORAS04MIN02SEGDetalles de la nochePara que no te pierdas ningún detalle de esta noche inolvidable.Fecha y horarioViernes 8 de enero de 2027. La recepción comenzará a las 21:30 hs.UbicaciónSalón de Eventos Jano's, Campana. Te esperamos para celebrar.Ver mapa de ubicaciónCódigo de vestimentaElegante formal. Vestido largo y traje completo para fumar.RegalosAgradecemos profundamente su presencia como el mejor regalo. Para quienes deseen contribuir, una urna estará disponible en el salón, o mediante transferencia.AliasLULI.XV.CBUUnidad de Comando de la Ciudad1234567890123456789012¡Confirma tu asistencia!Para el XV de Luli, el viernes 8 de enero de 2027Confirmar por WhatsAppPor favor, confirma antes del 15 de diciembre."}

## 2026-10-10 17:49:34.441Z load
- url: https://xk8046tt-3000.brs.devtunnels.ms/

## 2026-10-10 18:08:29.912Z load
- url: http://localhost:3000/

## 2026-10-10 18:08:32.844Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"2027Viernes 8 de EneroMis 15 AñosFaltan...90DÍAS06HORAS21MIN27SEGDetalles de la nochePara que no te pierdas ningún detalle de esta noche inolvidable.Fecha y horarioViernes 8 de enero de 2027. La recepción comenzará a las 21:30 hs.UbicaciónSalón de Eventos Jano's, Campana. Te esperamos para celebrar.Ver mapa de ubicaciónDress codeElegante formal. Vestido largo y traje completo o smoking.RegalosAgradecemos profundamente su presencia como el mejor regalo. Para quienes deseen contribuir, una urna estará disponible en el salón, o mediante transferencia.AliasLULI.XV.CBUCBU1234567890123456789012¡Confirma tu  asistencia!Para el XV de Luli, el viernes 8 de  enero de 2027Confirmar por WhatsAppPor favor, confirma antes del 15 de diciembre"}

## 2026-10-10 18:12:50.991Z click
- element: {"tag":"section","role":null,"ariaLabel":null,"name":null,"type":null,"id":"hero","placeholder":null,"label":null,"value":null,"valueLength":0,"text":"2027Viernes 8 de EneroMis 15 AñosFaltan...90DÍAS06HORAS17MIN09SEG"}

## 2026-10-10 18:17:03.043Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"90DÍAS06HORAS12MIN57SEG"}

## 2026-10-10 18:17:03.403Z click
- element: {"tag":"section","role":null,"ariaLabel":null,"name":null,"type":null,"id":"detalles","placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Detalles de la nochePara que no te pierdas ningún detalle de esta noche inolvidable.Fecha y horarioViernes 8 de enero de 2027. La recepción comenzará a las 21:30 hs.UbicaciónSalón de Eventos Jano's, Campana. Te esperamos para celebrar.VER MAPA DE UBICACIÓNDress codeElegante formal. Vestido largo y traje completo o smoking."}

## 2026-10-10 18:17:14.635Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Elegante formal. Vestido largo y traje completo o smoking."}

## 2026-10-10 18:19:06.195Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Viernes 8 de enero de 2027. La recepción comenzará a las 21:30 hs."}

## 2026-10-10 18:19:06.786Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Viernes 8 de enero de 2027. La recepción comenzará a las 21:30 hs."}

## 2026-10-10 18:24:08.288Z console.error
- text: [vite] Failed to reload /src/pages/builder/home/Section3.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-10 18:24:44.758Z load
- url: http://localhost:3000/

## 2026-10-10 18:26:18.759Z load
- url: http://localhost:3000/

## 2026-10-10 18:26:31.086Z load
- url: http://localhost:3000/

## 2026-10-10 18:26:32.415Z window.error
- message: Uncaught ReferenceError: fotoDressCode is not defined
- source: http://localhost:3000/src/pages/builder/home/Section3.jsx?t=1791656790392
- line: 145
- col: 19
- stack: 
    ReferenceError: fotoDressCode is not defined
        at http://localhost:3000/src/pages/builder/home/Section3.jsx?t=1791656790392:145:19
        at Array.map (<anonymous>)
        at Section3 (http://localhost:3000/src/pages/builder/home/Section3.jsx?t=1791656790392:103:119)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:15962:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19818:15)

## 2026-10-10 18:26:32.431Z window.error
- message: Uncaught ReferenceError: fotoDressCode is not defined
- source: http://localhost:3000/src/pages/builder/home/Section3.jsx?t=1791656790392
- line: 145
- col: 19
- stack: 
    ReferenceError: fotoDressCode is not defined
        at http://localhost:3000/src/pages/builder/home/Section3.jsx?t=1791656790392:145:19
        at Array.map (<anonymous>)
        at Section3 (http://localhost:3000/src/pages/builder/home/Section3.jsx?t=1791656790392:103:119)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:15962:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19818:15)

## 2026-10-10 18:26:32.435Z console.error
- text: 
    The above error occurred in the <Section3> component:
    
        at Section3 (http://localhost:3000/src/pages/builder/home/Section3.jsx?t=1791656790392:103:119)
        at div
        at div
        at div
        at main
        at Page (http://localhost:3000/src/components/builder/Page.jsx:18:3)
        at HomePage
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=31b03b06:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=31b03b06:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=31b03b06:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=31b03b06:10816:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=31b03b06:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=31b03b06:67:5)
        at App
    
    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

## 2026-10-10 18:26:32.437Z window.error
- message: Uncaught ReferenceError: fotoDressCode is not defined
- source: http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06
- line: 19466
- col: 13
- stack: 
    ReferenceError: fotoDressCode is not defined
        at http://localhost:3000/src/pages/builder/home/Section3.jsx?t=1791656790392:145:19
        at Array.map (<anonymous>)
        at Section3 (http://localhost:3000/src/pages/builder/home/Section3.jsx?t=1791656790392:103:119)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19169:15)

## 2026-10-10 18:26:34.934Z click
- element: {"tag":"html","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"\n\t\timport { injectIntoGlobalHook } from \"/@react-refresh\";\ninjectIntoGlobalHook(window);\nwindow.$RefreshReg$ = () => {};\nwindow.$RefreshSig$ = () => (type) => type;\n\n\t\t\n\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\n\t\tconst SITE_PAGES_ENDPOINT = '/__horizons/site-pages';\n\nconst OUTGOING_SITE_PAGES_MESSAGE = 'sitePages';\nconst INCOMING_REQUEST_SITE_PAGES_MESSAGE = 'request-site-pages';\n\nconst ALLOWED_PARENT_ORIGINS = [\n\t'https://horizons.hostinger.com',\n\t'https://horizons.hostinger.dev',\n\t'https://horizons-frontend-local.hostinger.dev',\n\t'http://localhost:4000',\n];\n\nfunction postSitePages(pages) {\n\tlet parentOrigin = window.location.ancestorOrigins?.[0];\n\tif (!parentOrigin && document.referrer) {\n\t\ttry {\n\t\t\tparentOrigin = new URL(document.referrer).origin;\n\t\t} catch {}\n\t}\n\tif (parentOrigin && ALLOWED_PARENT_ORIGINS.includes(parentOrigin)) {\n\t\twindow.parent.postMessage({ type: OUTGOING_SITE_PAGES_MESSAGE, payload: { pages } }, parentOrigin);\n\t}\n}\n\nasync function sendSitePagesToParent() {\n\tif (window.self === window.top) {\n\t\treturn;\n\t}\n\n\ttry {\n\t\tconst response = await fetch(SITE_PAGES_ENDPOINT);\n\t\tif (!response.ok) {\n\t\t\tthrow new Error(`HTTP ${response.status}`);\n\t\t}\n\t\tpostSitePages(await response.json());\n\t} catch (error) {\n\t\tconsole.error('[site-pages] Failed to send site pages to parent:', error);\n\t}\n}\n\nif (window.self !== window.top) {\n\twindow.addEventListener('load', sendSitePagesToParent);\n\twindow.addEventListener('message', (event) => {\n\t\tif (event.data?.type === INCOMING_REQUEST_SITE_PAGES_MESSAGE) {\n\t\t\tsendSitePagesToParent();\n\t\t}\n\t});\n}\n\n\t\t\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id],\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-assisted-id] {\n\t\tcursor: default !important;\n\t\toverflow-wrap: anywhere;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id][contenteditable=\"true\"],\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-assisted-id][contenteditable=\"true\"] {\n\t\toutline: 1px solid #673DE6;\n\t\tcaret-color: currentColor;\n\t\tuser-select: text;\n\t\t-webkit-user-select: text;\n\t\tcu..."}

## 2026-10-10 18:27:32.403Z click
- element: {"tag":"img","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-10 18:27:35.394Z click
- element: {"tag":"svg","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-10 18:27:41.450Z click
- element: {"tag":"font","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Elegante formal. Vestido largo y traje completo para fumar. (No se permite color verde ni rosa)."}

## 2026-10-10 18:27:42.248Z click
- element: {"tag":"font","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Elegante formal. Vestido largo y traje completo para fumar. (No se permite color verde ni rosa)."}

## 2026-10-10 18:27:42.737Z click
- element: {"tag":"font","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Elegante formal. Vestido largo y traje completo para fumar. (No se permite color verde ni rosa)."}

## 2026-10-10 18:27:45.137Z click
- element: {"tag":"font","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Elegante formal. Vestido largo y traje completo para fumar. (No se permite color verde ni rosa)."}

## 2026-10-10 18:27:46.169Z click
- element: {"tag":"font","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Elegante formal. Vestido largo y traje completo para fumar. (No se permite color verde ni rosa)."}

## 2026-10-10 18:27:46.729Z click
- element: {"tag":"font","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Elegante formal. Vestido largo y traje completo para fumar. (No se permite color verde ni rosa)."}

## 2026-10-10 18:45:32.740Z console.error
- text: [vite] Failed to reload /src/pages/builder/home/Section3.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-10 18:46:42.035Z console.error
- text: [vite] Failed to reload /src/pages/builder/home/HomePage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-10 18:47:06.457Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Fecha y horarioViernes 8 de enero de 2027. La recepción será de 21:00 a 05:00 hs.UbicaciónSalón de Eventos Jano's, Campana. Te esperamos para celebrar.VER MAPA DE UBICACIÓNCódigo de vestimentaElegante formal. Vestido largo y traje completo para fumar. (No se permite color verde ni rosa)."}

## 2026-10-10 18:47:07.064Z click
- element: {"tag":"img","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-10 18:47:07.559Z click
- element: {"tag":"article","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Código de vestimentaElegante formal. Vestido largo y traje completo para fumar. (No se permite color verde ni rosa)."}

## 2026-10-10 18:47:08.015Z click
- element: {"tag":"img","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-10 18:47:08.456Z click
- element: {"tag":"img","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-10 18:47:08.825Z click
- element: {"tag":"font","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Código de vestimenta"}

## 2026-10-10 18:47:18.126Z console.error
- text: [vite] Failed to reload /src/pages/builder/home/Section3.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-10 18:47:30.216Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Fecha y horarioViernes 8 de enero de 2027. La recepción será de 21:00 a 05:00 hs.UbicaciónSalón de Eventos Jano's, Campana. Te esperamos para celebrar.VER MAPA DE UBICACIÓNCódigo de vestimentaElegante formal. Vestido largo y traje completo para fumar. (No se permite color verde ni rosa)."}

## 2026-10-10 18:50:47.530Z console.error
- text: [vite] Failed to reload /src/pages/builder/home/Section3.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-10 18:51:50.415Z click
- element: {"tag":"h3","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Código de vestimenta"}

## 2026-10-10 18:51:50.815Z click
- element: {"tag":"img","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-10 18:55:31.208Z click
- element: {"tag":"article","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Código de vestimentaElegante formal. Vestido largo y traje completo para fumar. (No se permite color verde ni rosa)."}

## 2026-10-10 18:57:24.480Z console.error
- text: [vite] Failed to reload /src/pages/builder/home/Section3.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-10 18:57:32.410Z console.error
- text: [vite] Failed to reload /src/pages/builder/home/HomePage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-14 17:20:39.322Z load
- url: http://localhost:3000/

## 2026-10-14 17:20:40.988Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-10-14 17:21:21.428Z click
- element: {"tag":"img","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-14 18:00:17.432Z load
- url: http://localhost:3000/

## 2026-10-14 18:07:01.532Z click
- element: {"tag":"img","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-14 18:20:03.546Z load
- url: http://localhost:3000/

## 2026-10-14 18:59:06.213Z load
- url: http://localhost:3000/

## 2026-10-14 19:15:55.996Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Realizar transferencia"}

## 2026-10-14 19:16:43.208Z click
- element: {"tag":"section","role":null,"ariaLabel":null,"name":null,"type":null,"id":"galeria","placeholder":null,"label":null,"value":null,"valueLength":0,"text":"RegalosAgradecemos profundamente su presencia como el mejor regalo. Para quienes deseen contribuir, una urna estará disponible en el salón, o mediante transferencia.AliaslulivulichCBU0000003100099693711366NOMBRE Y APELLIDOLucila VulichRealizar transferencia"}

## 2026-10-14 19:18:51.450Z load
- url: http://localhost:3000/

## 2026-10-15 21:18:30.548Z load
- url: http://localhost:3000/

## 2026-10-15 21:18:33.402Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-10-15 21:18:35.573Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"2027Viernes 8 de EneroMis 15 AñosFaltan...85DÍAS03HORAS11MIN24SEGDetalles de la nochePara que no te pierdas ningún detalle de esta noche inolvidable.Fecha y horarioViernes 8 de enero de 2027. La fiesta será de 21:00 a 05:00 hs.UbicaciónSalón de Eventos Jano's, Campana. Te esperamos para celebrar.Ver mapa de ubicaciónCódigo de vestimentaElegante formal. Vestido largo o traje. (No se permite color verde ni rosa).RegalosAgradecemos profundamente su presencia como el mejor regalo. Para quienes deseen contribuir, una urna estará disponible en el salón, o mediante transferencia.AliaslulivulichCBU0000003100099693711366NOMBRE Y APELLIDOLucila VulichRealizar transferencia¡Confirma tu  asistencia!Para el XV de Luli, el viernes 8 de  enero de 2027Confirmar por WhatsAppPor favor, confirma antes del 27 de noviembre. ¡Gracias!"}

## 2026-10-15 21:20:01.780Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Realizar transferencia"}

## 2026-10-15 21:20:25.750Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Aliaslulivulich"}

## 2026-10-15 21:20:47.967Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"RegalosAgradecemos profundamente su presencia como el mejor regalo. Para quienes deseen contribuir, una urna estará disponible en el salón, o mediante transferencia.AliaslulivulichCBU0000003100099693711366NOMBRE Y APELLIDOLucila VulichRealizar transferencia"}

## 2026-10-15 21:27:29.634Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"RegalosAgradecemos profundamente su presencia como el mejor regalo. Para quienes deseen contribuir, una urna estará disponible en el salón, o mediante transferencia.AliaslulivulichCBU0000003100099693711366NOMBRE Y APELLIDOLucila VulichRealizar transferencia"}

## 2026-10-15 21:32:08.832Z click
- element: {"tag":"h3","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Regalos"}

## 2026-10-15 21:37:55.483Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Agradecemos profundamente su presencia como el mejor regalo. Para quienes deseen contribuir, una urna estará disponible en el salón, o mediante transferencia."}

## 2026-10-15 21:38:15.631Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Agradecemos profundamente su presencia como el mejor regalo. Para quienes deseen contribuir, una urna estará disponible en el salón, o mediante transferencia."}

## 2026-10-15 21:38:25.186Z click
- element: {"tag":"img","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-15 21:41:00.142Z click
- element: {"tag":"h3","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Regalos"}

## 2026-10-15 21:41:02.779Z load
- url: http://localhost:3000/

## 2026-10-15 21:41:04.243Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Agradecemos profundamente su presencia como el mejor regalo. Para quienes deseen contribuir, una urna estará disponible en el salón, o mediante transferencia."}

## 2026-10-15 21:41:05.617Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Agradecemos profundamente su presencia como el mejor regalo. Para quienes deseen contribuir, una urna estará disponible en el salón, o mediante transferencia."}

## 2026-10-15 21:41:06.985Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"RegalosAgradecemos profundamente su presencia como el mejor regalo. Para quienes deseen contribuir, una urna estará disponible en el salón, o mediante transferencia.AliaslulivulichCBU0000003100099693711366NOMBRE Y APELLIDOLucila VulichRealizar transferencia"}

## 2026-10-15 21:41:29.565Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"2027Viernes 8 de EneroMis 15 AñosFaltan...85DÍAS02HORAS48MIN30SEGDetalles de la nochePara que no te pierdas ningún detalle de esta noche inolvidable.Fecha y horarioViernes 8 de enero de 2027. La fiesta será de 21:00 a 05:00 hs.UbicaciónSalón de Eventos Jano's, Campana. Te esperamos para celebrar.Ver mapa de ubicaciónCódigo de vestimentaElegante formal. Vestido largo o traje. (No se permite color verde ni rosa).RegalosAgradecemos profundamente su presencia como el mejor regalo. Para quienes deseen contribuir, una urna estará disponible en el salón, o mediante transferencia.AliaslulivulichCBU0000003100099693711366NOMBRE Y APELLIDOLucila VulichRealizar transferencia¡Confirma tu  asistencia!Para el XV de Luli, el viernes 8 de  enero de 2027Confirmar por WhatsAppPor favor, confirma antes del 27 de noviembre. ¡Gracias!"}

## 2026-10-15 21:43:21.649Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Agradecemos profundamente su presencia como el mejor regalo. Para quienes deseen contribuir, una urna estará disponible en el salón, o mediante transferencia."}

## 2026-10-15 21:45:01.940Z click
- element: {"tag":"strong","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"lulivulich"}

## 2026-10-15 21:45:02.419Z click
- element: {"tag":"strong","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"lulivulich"}

## 2026-10-15 21:46:04.801Z click
- element: {"tag":"strong","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"0000003100099693711366"}

## 2026-10-15 21:46:07.986Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"RegalosAgradecemos profundamente su presencia como el mejor regalo. Para quienes deseen contribuir, una urna estará disponible en el salón, o mediante transferencia.AliaslulivulichCBU0000003100099693711366NOMBRE Y APELLIDOLucila VulichRealizar transferencia"}

## 2026-10-15 21:47:32.436Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"2027Viernes 8 de EneroMis 15 AñosFaltan...85DÍAS02HORAS42MIN27SEGDetalles de la nochePara que no te pierdas ningún detalle de esta noche inolvidable.Fecha y horarioViernes 8 de enero de 2027. La fiesta será de 21:00 a 05:00 hs.UbicaciónSalón de Eventos Jano's, Campana. Te esperamos para celebrar.Ver mapa de ubicaciónCódigo de vestimentaElegante formal. Vestido largo o traje. (No se permite color verde ni rosa).RegalosAgradecemos profundamente su presencia como el mejor regalo. Para quienes deseen contribuir, una urna estará disponible en el salón, o mediante transferencia.AliaslulivulichCBU0000003100099693711366NOMBRE Y APELLIDOLucila VulichRealizar transferencia¡Confirma tu  asistencia!Para el XV de Luli, el viernes 8 de  enero de 2027Confirmar por WhatsAppPor favor, confirma antes del 27 de noviembre. ¡Gracias!"}

## 2026-10-15 21:48:25.903Z click
- element: {"tag":"img","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-15 21:48:27.535Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"RegalosAgradecemos profundamente su presencia como el mejor regalo. Para quienes deseen contribuir, una urna estará disponible en el salón, o mediante transferencia.AliaslulivulichCBU0000003100099693711366NOMBRE Y APELLIDOLucila VulichRealizar transferencia"}

## 2026-10-15 21:48:29.063Z click
- element: {"tag":"h3","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Código de vestimenta"}

## 2026-10-15 21:48:29.255Z click
- element: {"tag":"h3","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Código de vestimenta"}

## 2026-10-15 21:48:29.807Z click
- element: {"tag":"h3","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Código de vestimenta"}

## 2026-10-15 21:50:57.367Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Realizar transferencia"}

## 2026-10-15 21:52:51.775Z click
- element: {"tag":"h3","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Regalos"}

## 2026-10-15 21:53:13.575Z click
- element: {"tag":"article","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"UbicaciónSalón de Eventos Jano's, Campana. Te esperamos para celebrar.Ver mapa de ubicación"}

## 2026-10-15 22:11:57.019Z load
- url: http://localhost:3000/

## 2026-10-15 22:11:58.314Z click
- element: {"tag":"img","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-15 22:11:58.922Z click
- element: {"tag":"article","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Código de vestimentaElegante formal. Vestido largo o traje. (No se permite color verde ni rosa)."}

## 2026-10-15 22:11:59.528Z click
- element: {"tag":"article","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Código de vestimentaElegante formal. Vestido largo o traje. (No se permite color verde ni rosa)."}

## 2026-10-15 22:11:59.936Z click
- element: {"tag":"article","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Código de vestimentaElegante formal. Vestido largo o traje. (No se permite color verde ni rosa)."}

## 2026-10-15 22:12:00.568Z click
- element: {"tag":"article","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Código de vestimentaElegante formal. Vestido largo o traje. (No se permite color verde ni rosa)."}

## 2026-10-15 22:12:56.995Z console.error
- text: [vite] Failed to reload /src/pages/builder/home/Section3.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-15 22:13:05.808Z click
- element: {"tag":"article","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Código de vestimentaElegante formal. Vestido largo o traje. (No se permite color verde ni rosa)."}

## 2026-10-15 22:13:26.608Z click
- element: {"tag":"h2","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"¡Confirma tu  asistencia!"}

## 2026-10-15 22:23:54.074Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Agradecemos profundamente su presencia como el mejor regalo. Para quienes deseen contribuir, una urna estará disponible en el salón, o mediante transferencia."}

## 2026-10-15 22:42:48.828Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Para el XV de Luli, el viernes 8 de enero de 2027 a las 20:00 hs. en el Teatro Colón, necesitamos tu confirmación de asistencia. Por favor, confirma antes del 27 de noviembre. ¡Gracias!"}

## 2026-10-15 22:45:47.346Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Por favor, confirma antes del 27 de noviembre. ¡Gracias!"}

## 2026-10-15 22:48:33.893Z console.error
- text: [vite] Failed to reload /src/pages/builder/home/Section5.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-15 22:56:30.209Z load
- url: http://localhost:3000/

## 2026-10-15 23:00:57.282Z console.error
- text: [vite] Failed to reload /src/pages/builder/home/Section5.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-15 23:10:19.433Z window.error
- message: Uncaught ReferenceError: SectionMiddleImage is not defined
- source: http://localhost:3000/src/pages/builder/home/HomePage.jsx?t=1792105819194
- line: 116
- col: 36
- stack: 
    ReferenceError: SectionMiddleImage is not defined
        at HomePage (http://localhost:3000/src/pages/builder/home/HomePage.jsx?t=1792105819194:116:36)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:11596:26)
        at updateFunctionComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:14630:28)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:15972:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19818:15)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19190:13)

## 2026-10-15 23:10:19.438Z window.error
- message: Uncaught ReferenceError: SectionMiddleImage is not defined
- source: http://localhost:3000/src/pages/builder/home/HomePage.jsx?t=1792105819194
- line: 116
- col: 36
- stack: 
    ReferenceError: SectionMiddleImage is not defined
        at HomePage (http://localhost:3000/src/pages/builder/home/HomePage.jsx?t=1792105819194:116:36)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:11596:26)
        at updateFunctionComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:14630:28)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:15972:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19818:15)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19190:13)

## 2026-10-15 23:10:19.441Z console.error
- text: 
    The above error occurred in the <HomePage> component:
    
        at HomePage (http://localhost:3000/src/pages/builder/home/HomePage.jsx?t=1792105819194:116:36)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=31b03b06:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=31b03b06:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=31b03b06:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=31b03b06:10816:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=31b03b06:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=31b03b06:67:5)
        at App
    
    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

## 2026-10-15 23:10:19.507Z unhandledrejection
- message: SectionMiddleImage is not defined
- stack: 
    ReferenceError: SectionMiddleImage is not defined
        at HomePage (http://localhost:3000/src/pages/builder/home/HomePage.jsx?t=1792105819194:116:36)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:11596:26)
        at updateFunctionComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:14630:28)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:15972:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:18786:28)
        at performSyncWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:18932:28)

## 2026-10-15 23:10:19.745Z root.empty
- url: http://localhost:3000/

## 2026-10-15 23:10:31.701Z window.error
- message: Uncaught ReferenceError: SectionMiddleImage is not defined
- source: http://localhost:3000/src/pages/builder/home/HomePage.jsx?t=1792105831492
- line: 116
- col: 36
- stack: 
    ReferenceError: SectionMiddleImage is not defined
        at HomePage (http://localhost:3000/src/pages/builder/home/HomePage.jsx?t=1792105831492:116:36)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:15962:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19818:15)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19190:13)

## 2026-10-15 23:10:31.704Z window.error
- message: Uncaught ReferenceError: SectionMiddleImage is not defined
- source: http://localhost:3000/src/pages/builder/home/HomePage.jsx?t=1792105831492
- line: 116
- col: 36
- stack: 
    ReferenceError: SectionMiddleImage is not defined
        at HomePage (http://localhost:3000/src/pages/builder/home/HomePage.jsx?t=1792105831492:116:36)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:15962:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19818:15)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19190:13)

## 2026-10-15 23:10:31.705Z console.error
- text: 
    The above error occurred in the <HomePage> component:
    
        at HomePage (http://localhost:3000/src/pages/builder/home/HomePage.jsx?t=1792105831492:116:36)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=31b03b06:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=31b03b06:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=31b03b06:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=31b03b06:10816:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=31b03b06:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=31b03b06:67:5)
        at App
    
    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

## 2026-10-15 23:10:31.706Z unhandledrejection
- message: SectionMiddleImage is not defined
- stack: 
    ReferenceError: SectionMiddleImage is not defined
        at HomePage (http://localhost:3000/src/pages/builder/home/HomePage.jsx?t=1792105831492:116:36)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:18786:28)
        at performSyncWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:18932:28)

## 2026-10-15 23:10:33.301Z window.error
- message: Uncaught ReferenceError: SectionMiddleImage is not defined
- source: http://localhost:3000/src/pages/builder/home/HomePage.jsx?t=1792105833171
- line: 116
- col: 36
- stack: 
    ReferenceError: SectionMiddleImage is not defined
        at HomePage (http://localhost:3000/src/pages/builder/home/HomePage.jsx?t=1792105833171:116:36)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:15962:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19818:15)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19190:13)

## 2026-10-15 23:10:33.302Z window.error
- message: Uncaught ReferenceError: SectionMiddleImage is not defined
- source: http://localhost:3000/src/pages/builder/home/HomePage.jsx?t=1792105833171
- line: 116
- col: 36
- stack: 
    ReferenceError: SectionMiddleImage is not defined
        at HomePage (http://localhost:3000/src/pages/builder/home/HomePage.jsx?t=1792105833171:116:36)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:15962:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19818:15)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19190:13)

## 2026-10-15 23:10:33.303Z console.error
- text: 
    The above error occurred in the <HomePage> component:
    
        at HomePage (http://localhost:3000/src/pages/builder/home/HomePage.jsx?t=1792105833171:116:36)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=31b03b06:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=31b03b06:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=31b03b06:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=31b03b06:10816:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=31b03b06:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=31b03b06:67:5)
        at App
    
    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

## 2026-10-15 23:10:33.303Z unhandledrejection
- message: SectionMiddleImage is not defined
- stack: 
    ReferenceError: SectionMiddleImage is not defined
        at HomePage (http://localhost:3000/src/pages/builder/home/HomePage.jsx?t=1792105833171:116:36)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:18786:28)
        at performSyncWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:18932:28)

## 2026-10-15 23:10:40.870Z click
- element: {"tag":"html","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"\n\t\timport { injectIntoGlobalHook } from \"/@react-refresh\";\ninjectIntoGlobalHook(window);\nwindow.$RefreshReg$ = () => {};\nwindow.$RefreshSig$ = () => (type) => type;\n\n\t\t\n\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\n\t\tconst SITE_PAGES_ENDPOINT = '/__horizons/site-pages';\n\nconst OUTGOING_SITE_PAGES_MESSAGE = 'sitePages';\nconst INCOMING_REQUEST_SITE_PAGES_MESSAGE = 'request-site-pages';\n\nconst ALLOWED_PARENT_ORIGINS = [\n\t'https://horizons.hostinger.com',\n\t'https://horizons.hostinger.dev',\n\t'https://horizons-frontend-local.hostinger.dev',\n\t'http://localhost:4000',\n];\n\nfunction postSitePages(pages) {\n\tlet parentOrigin = window.location.ancestorOrigins?.[0];\n\tif (!parentOrigin && document.referrer) {\n\t\ttry {\n\t\t\tparentOrigin = new URL(document.referrer).origin;\n\t\t} catch {}\n\t}\n\tif (parentOrigin && ALLOWED_PARENT_ORIGINS.includes(parentOrigin)) {\n\t\twindow.parent.postMessage({ type: OUTGOING_SITE_PAGES_MESSAGE, payload: { pages } }, parentOrigin);\n\t}\n}\n\nasync function sendSitePagesToParent() {\n\tif (window.self === window.top) {\n\t\treturn;\n\t}\n\n\ttry {\n\t\tconst response = await fetch(SITE_PAGES_ENDPOINT);\n\t\tif (!response.ok) {\n\t\t\tthrow new Error(`HTTP ${response.status}`);\n\t\t}\n\t\tpostSitePages(await response.json());\n\t} catch (error) {\n\t\tconsole.error('[site-pages] Failed to send site pages to parent:', error);\n\t}\n}\n\nif (window.self !== window.top) {\n\twindow.addEventListener('load', sendSitePagesToParent);\n\twindow.addEventListener('message', (event) => {\n\t\tif (event.data?.type === INCOMING_REQUEST_SITE_PAGES_MESSAGE) {\n\t\t\tsendSitePagesToParent();\n\t\t}\n\t});\n}\n\n\t\t\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id],\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-assisted-id] {\n\t\tcursor: default !important;\n\t\toverflow-wrap: anywhere;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id][contenteditable=\"true\"],\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-assisted-id][contenteditable=\"true\"] {\n\t\toutline: 1px solid #673DE6;\n\t\tcaret-color: currentColor;\n\t\tuser-select: text;\n\t\t-webkit-user-select: text;\n\t\tcu..."}

## 2026-10-15 23:10:42.291Z load
- url: http://localhost:3000/

## 2026-10-15 23:10:42.485Z window.error
- message: Uncaught ReferenceError: SectionMiddleImage is not defined
- source: http://localhost:3000/src/pages/builder/home/HomePage.jsx?t=1792105833171
- line: 116
- col: 36
- stack: 
    ReferenceError: SectionMiddleImage is not defined
        at HomePage (http://localhost:3000/src/pages/builder/home/HomePage.jsx?t=1792105833171:116:36)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:15962:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19818:15)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19190:13)

## 2026-10-15 23:10:42.497Z window.error
- message: Uncaught ReferenceError: SectionMiddleImage is not defined
- source: http://localhost:3000/src/pages/builder/home/HomePage.jsx?t=1792105833171
- line: 116
- col: 36
- stack: 
    ReferenceError: SectionMiddleImage is not defined
        at HomePage (http://localhost:3000/src/pages/builder/home/HomePage.jsx?t=1792105833171:116:36)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:15962:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19818:15)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19190:13)

## 2026-10-15 23:10:42.502Z console.error
- text: 
    The above error occurred in the <HomePage> component:
    
        at HomePage (http://localhost:3000/src/pages/builder/home/HomePage.jsx?t=1792105833171:116:36)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=31b03b06:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=31b03b06:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=31b03b06:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=31b03b06:10816:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=31b03b06:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=31b03b06:67:5)
        at App
    
    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

## 2026-10-15 23:10:42.506Z window.error
- message: Uncaught ReferenceError: SectionMiddleImage is not defined
- source: http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06
- line: 19466
- col: 13
- stack: 
    ReferenceError: SectionMiddleImage is not defined
        at HomePage (http://localhost:3000/src/pages/builder/home/HomePage.jsx?t=1792105833171:116:36)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:18734:30)

## 2026-10-15 23:10:43.639Z click
- element: {"tag":"html","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"\n\t\timport { injectIntoGlobalHook } from \"/@react-refresh\";\ninjectIntoGlobalHook(window);\nwindow.$RefreshReg$ = () => {};\nwindow.$RefreshSig$ = () => (type) => type;\n\n\t\t\n\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\n\t\tconst SITE_PAGES_ENDPOINT = '/__horizons/site-pages';\n\nconst OUTGOING_SITE_PAGES_MESSAGE = 'sitePages';\nconst INCOMING_REQUEST_SITE_PAGES_MESSAGE = 'request-site-pages';\n\nconst ALLOWED_PARENT_ORIGINS = [\n\t'https://horizons.hostinger.com',\n\t'https://horizons.hostinger.dev',\n\t'https://horizons-frontend-local.hostinger.dev',\n\t'http://localhost:4000',\n];\n\nfunction postSitePages(pages) {\n\tlet parentOrigin = window.location.ancestorOrigins?.[0];\n\tif (!parentOrigin && document.referrer) {\n\t\ttry {\n\t\t\tparentOrigin = new URL(document.referrer).origin;\n\t\t} catch {}\n\t}\n\tif (parentOrigin && ALLOWED_PARENT_ORIGINS.includes(parentOrigin)) {\n\t\twindow.parent.postMessage({ type: OUTGOING_SITE_PAGES_MESSAGE, payload: { pages } }, parentOrigin);\n\t}\n}\n\nasync function sendSitePagesToParent() {\n\tif (window.self === window.top) {\n\t\treturn;\n\t}\n\n\ttry {\n\t\tconst response = await fetch(SITE_PAGES_ENDPOINT);\n\t\tif (!response.ok) {\n\t\t\tthrow new Error(`HTTP ${response.status}`);\n\t\t}\n\t\tpostSitePages(await response.json());\n\t} catch (error) {\n\t\tconsole.error('[site-pages] Failed to send site pages to parent:', error);\n\t}\n}\n\nif (window.self !== window.top) {\n\twindow.addEventListener('load', sendSitePagesToParent);\n\twindow.addEventListener('message', (event) => {\n\t\tif (event.data?.type === INCOMING_REQUEST_SITE_PAGES_MESSAGE) {\n\t\t\tsendSitePagesToParent();\n\t\t}\n\t});\n}\n\n\t\t\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id],\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-assisted-id] {\n\t\tcursor: default !important;\n\t\toverflow-wrap: anywhere;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id][contenteditable=\"true\"],\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-assisted-id][contenteditable=\"true\"] {\n\t\toutline: 1px solid #673DE6;\n\t\tcaret-color: currentColor;\n\t\tuser-select: text;\n\t\t-webkit-user-select: text;\n\t\tcu..."}

## 2026-10-15 23:11:07.118Z load
- url: http://localhost:3000/

## 2026-10-15 23:11:07.753Z window.error
- message: Uncaught ReferenceError: SectionMiddleImage is not defined
- source: http://localhost:3000/src/pages/builder/home/HomePage.jsx
- line: 116
- col: 36
- stack: 
    ReferenceError: SectionMiddleImage is not defined
        at HomePage (http://localhost:3000/src/pages/builder/home/HomePage.jsx:116:36)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:15962:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19818:15)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19190:13)

## 2026-10-15 23:11:07.755Z window.error
- message: Uncaught ReferenceError: SectionMiddleImage is not defined
- source: http://localhost:3000/src/pages/builder/home/HomePage.jsx
- line: 116
- col: 36
- stack: 
    ReferenceError: SectionMiddleImage is not defined
        at HomePage (http://localhost:3000/src/pages/builder/home/HomePage.jsx:116:36)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:15962:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19818:15)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19190:13)

## 2026-10-15 23:11:07.755Z console.error
- text: 
    The above error occurred in the <HomePage> component:
    
        at HomePage (http://localhost:3000/src/pages/builder/home/HomePage.jsx:116:36)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=31b03b06:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=31b03b06:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=31b03b06:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=31b03b06:10816:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=31b03b06:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=31b03b06:67:5)
        at App
    
    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

## 2026-10-15 23:11:07.755Z window.error
- message: Uncaught ReferenceError: SectionMiddleImage is not defined
- source: http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06
- line: 19466
- col: 13
- stack: 
    ReferenceError: SectionMiddleImage is not defined
        at HomePage (http://localhost:3000/src/pages/builder/home/HomePage.jsx:116:36)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=31b03b06:18734:30)

## 2026-10-15 23:11:12.213Z click
- element: {"tag":"html","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"\n\t\timport { injectIntoGlobalHook } from \"/@react-refresh\";\ninjectIntoGlobalHook(window);\nwindow.$RefreshReg$ = () => {};\nwindow.$RefreshSig$ = () => (type) => type;\n\n\t\t\n\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\n\t\tconst SITE_PAGES_ENDPOINT = '/__horizons/site-pages';\n\nconst OUTGOING_SITE_PAGES_MESSAGE = 'sitePages';\nconst INCOMING_REQUEST_SITE_PAGES_MESSAGE = 'request-site-pages';\n\nconst ALLOWED_PARENT_ORIGINS = [\n\t'https://horizons.hostinger.com',\n\t'https://horizons.hostinger.dev',\n\t'https://horizons-frontend-local.hostinger.dev',\n\t'http://localhost:4000',\n];\n\nfunction postSitePages(pages) {\n\tlet parentOrigin = window.location.ancestorOrigins?.[0];\n\tif (!parentOrigin && document.referrer) {\n\t\ttry {\n\t\t\tparentOrigin = new URL(document.referrer).origin;\n\t\t} catch {}\n\t}\n\tif (parentOrigin && ALLOWED_PARENT_ORIGINS.includes(parentOrigin)) {\n\t\twindow.parent.postMessage({ type: OUTGOING_SITE_PAGES_MESSAGE, payload: { pages } }, parentOrigin);\n\t}\n}\n\nasync function sendSitePagesToParent() {\n\tif (window.self === window.top) {\n\t\treturn;\n\t}\n\n\ttry {\n\t\tconst response = await fetch(SITE_PAGES_ENDPOINT);\n\t\tif (!response.ok) {\n\t\t\tthrow new Error(`HTTP ${response.status}`);\n\t\t}\n\t\tpostSitePages(await response.json());\n\t} catch (error) {\n\t\tconsole.error('[site-pages] Failed to send site pages to parent:', error);\n\t}\n}\n\nif (window.self !== window.top) {\n\twindow.addEventListener('load', sendSitePagesToParent);\n\twindow.addEventListener('message', (event) => {\n\t\tif (event.data?.type === INCOMING_REQUEST_SITE_PAGES_MESSAGE) {\n\t\t\tsendSitePagesToParent();\n\t\t}\n\t});\n}\n\n\t\t\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id],\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-assisted-id] {\n\t\tcursor: default !important;\n\t\toverflow-wrap: anywhere;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id][contenteditable=\"true\"],\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-assisted-id][contenteditable=\"true\"] {\n\t\toutline: 1px solid #673DE6;\n\t\tcaret-color: currentColor;\n\t\tuser-select: text;\n\t\t-webkit-user-select: text;\n\t\tcu..."}

## 2026-10-15 23:11:37.230Z console.error
- text: [vite] Failed to reload /src/pages/builder/home/HomePage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-15 23:12:17.684Z click
- element: {"tag":"vite-error-overlay","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-15 23:12:20.104Z click
- element: {"tag":"html","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"\n\t\timport { injectIntoGlobalHook } from \"/@react-refresh\";\ninjectIntoGlobalHook(window);\nwindow.$RefreshReg$ = () => {};\nwindow.$RefreshSig$ = () => (type) => type;\n\n\t\t\n\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\n\t\tconst SITE_PAGES_ENDPOINT = '/__horizons/site-pages';\n\nconst OUTGOING_SITE_PAGES_MESSAGE = 'sitePages';\nconst INCOMING_REQUEST_SITE_PAGES_MESSAGE = 'request-site-pages';\n\nconst ALLOWED_PARENT_ORIGINS = [\n\t'https://horizons.hostinger.com',\n\t'https://horizons.hostinger.dev',\n\t'https://horizons-frontend-local.hostinger.dev',\n\t'http://localhost:4000',\n];\n\nfunction postSitePages(pages) {\n\tlet parentOrigin = window.location.ancestorOrigins?.[0];\n\tif (!parentOrigin && document.referrer) {\n\t\ttry {\n\t\t\tparentOrigin = new URL(document.referrer).origin;\n\t\t} catch {}\n\t}\n\tif (parentOrigin && ALLOWED_PARENT_ORIGINS.includes(parentOrigin)) {\n\t\twindow.parent.postMessage({ type: OUTGOING_SITE_PAGES_MESSAGE, payload: { pages } }, parentOrigin);\n\t}\n}\n\nasync function sendSitePagesToParent() {\n\tif (window.self === window.top) {\n\t\treturn;\n\t}\n\n\ttry {\n\t\tconst response = await fetch(SITE_PAGES_ENDPOINT);\n\t\tif (!response.ok) {\n\t\t\tthrow new Error(`HTTP ${response.status}`);\n\t\t}\n\t\tpostSitePages(await response.json());\n\t} catch (error) {\n\t\tconsole.error('[site-pages] Failed to send site pages to parent:', error);\n\t}\n}\n\nif (window.self !== window.top) {\n\twindow.addEventListener('load', sendSitePagesToParent);\n\twindow.addEventListener('message', (event) => {\n\t\tif (event.data?.type === INCOMING_REQUEST_SITE_PAGES_MESSAGE) {\n\t\t\tsendSitePagesToParent();\n\t\t}\n\t});\n}\n\n\t\t\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id],\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-assisted-id] {\n\t\tcursor: default !important;\n\t\toverflow-wrap: anywhere;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id][contenteditable=\"true\"],\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-assisted-id][contenteditable=\"true\"] {\n\t\toutline: 1px solid #673DE6;\n\t\tcaret-color: currentColor;\n\t\tuser-select: text;\n\t\t-webkit-user-select: text;\n\t\tcu..."}

## 2026-10-15 23:12:41.213Z click
- element: {"tag":"vite-error-overlay","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-15 23:12:43.533Z load
- url: http://localhost:3000/

## 2026-10-15 23:12:45.571Z click
- element: {"tag":"vite-error-overlay","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-15 23:14:07.822Z load
- url: http://localhost:3000/

## 2026-10-15 23:23:14.702Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"2027Viernes 8 de EneroMis 15 AñosFaltan...85DÍAS01HORAS06MIN45SEGDetalles de la nochePara que no te pierdas ningún detalle de esta noche inolvidable.Fecha y horarioViernes 8 de enero de 2027. La fiesta será de 21:00 a 05:00 hs.UbicaciónSalón de Eventos Jano's, Campana. Te esperamos para celebrar.Ver mapa de ubicaciónCódigo de vestimentaElegante formal. Vestido largo o traje. (No se permite color verde ni rosa).RegalosAgradecemos profundamente su presencia como el mejor regalo. Para quienes deseen contribuir, una urna estará disponible en el salón, o mediante transferencia.AliaslulivulichCBU0000003100099693711366NOMBRE Y APELLIDOLucila VulichRealizar transferencia                  ¡Confirma tu asistencia!Para el XV de Luli, el viernes 8 de enero de 2027. ¡Esperamos contar con vos!Confirmar por WhatsAppPor favor, confirma antes del 27 de noviembre. ¡Gracias!              "}

## 2026-10-20 00:37:09.905Z load
- url: http://localhost:3000/

## 2026-10-20 00:37:10.895Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-10-20 00:38:04.288Z click
- element: {"tag":"img","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-20 00:38:20.594Z click
- element: {"tag":"img","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-20 00:38:35.618Z click
- element: {"tag":"img","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-20 00:38:35.796Z click
- element: {"tag":"img","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-20 01:28:40.940Z load
- url: http://localhost:3000/

## 2026-10-21 00:13:22.072Z load
- url: http://localhost:3000/

