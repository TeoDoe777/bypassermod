(function () {

    const bp = query => document.querySelector(query);
    const elementExists = query => bp(query) !== null;
        function bypasserready() {
            function click(query) {
                bp(query).click();
            }

            function clickIfElementExists(query, timeInSec = 1, funcName = 'setTimeout') {
                if (elementExists(query)) {
                    window[funcName](function () {
                        click(query);
                    }, timeInSec * 1000);
                }
            }

            function BypasserByCalciumtrice(re_domain, data, blog) {
                if (!re_domain.test(location.host)) return;
                if (typeof data === 'function') return data();
                if (Array.isArray(data)) data = {
                    '/': data
                };
                if (!(location.pathname in data)) return;
                const [key, value] = data[location.pathname];
                if (typeof key === 'object' && key.test(location.search)) return redirect(value + RegExp.$1, blog);
                const searchParams = new URLSearchParams(location.search);
                if (searchParams.has(key)) redirect(value + searchParams.get(key), blog);
            }



            if (['interactive', 'complete'].includes(document.readyState)) {
                onHtmlLoaded();
            } else {
                document.addEventListener('DOMContentLoaded', onHtmlLoaded);
            }

            function onHtmlLoaded() {

                BypasserByCalciumtrice(/sharemods.com/, function () {
                    $(".cookieinfo").empty();
                    // $("body.page").append("<div class='bypasser' style='position:fixed;top:0;left:0;z-index:999999;width:100%;height:100vh'><iframe width='100%' height='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://google.com'></iframe></div>");
                    $('#dForm').submit();
                });
                BypasserByCalciumtrice(/modsfire.com/, function () {
                    clickIfElementExists('.download-button', 2);
                });
                BypasserByCalciumtrice(/sharemods.com|modsbase.com/, function () {
                    clickIfElementExists('#downloadbtn', 1);
                });


            }
        }
    // if (location.href.match(/^(https?:\/\/)(modsfire|sharemods)(\.com)(\/.*)[a-zA-Z0-9].[a-zA-Z0-9].html/)) {

   
    if (location.href.match(/^(https?:\/\/)(modsbase|sharemods)(\.com)\/[a-zA-Z0-9]*(\/)([a-zA-Z0-9\._-]+)(\.)(?!_stalker\.commynity_)[a-zA-Z0-9\._-]*\.html/) && window.location.pathname.indexOf('_stalker.commynity_') !== -1) {
        bypasserready(function () {});
    }
    // else if (location.href.match(/^(https?:\/\/)(sharemods|modsfire|modsbase)(\.com)(\/.*)[a-zA-Z0-9].[a-zA-Z0-9].html/)) {
    //     bypasserready(function () { });
    // }
    // else if (location.href.match(/^(https?:\/\/)(modsfire)(\.com)(\/.*)[a-zA-Z0-9]*/)) {
    //     bypasserready(function () {});
    // }
    else if (location.href.match(/^(https?:\/\/)(modsfire|sharemods)(\.com)(\/.*)[a-zA-Z0-9].[a-zA-Z0-9].html/)) {
        alert(1);
    }
})();
