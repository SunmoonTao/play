
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"153",
  
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(document.querySelector){var a=document.querySelector(\".optanon-alert-box-wrapper\");if(a)return\"block\"===window.getComputedStyle(a).getPropertyValue(\"display\")}return!1})();"]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.category.pageType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(document.querySelector){var a=document.querySelector('meta[property\\x3d\"og:type\"]');return a?a.getAttribute(\"content\"):null}})();"]
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",2],8,16],",b=",["escape",["macro",3],8,16],";return a?a:b?b:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return\"string\"===typeof a?a.replace(\/\u0026(?![#a-z0-9]+?;)\/g,\"and\").replace(\"\\x26amp;\",\"and\"):a}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return\"string\"===typeof a?a.replace(\/^\\s+\/,\"\").replace(\/\\s+$\/,\"\").replace(\/\\s+\/,\" \"):a}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.category.contentType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",7],8,16],"||window._pageMetaData[\"WT.cg_s\"]||null})();"]
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],",b=",["escape",["macro",6],8,16],",c=",["escape",["macro",8],8,16],";return b(a(c))})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=73;return function(a){a.set(\"dimension\"+b,a.get(\"clientId\"))}})();"]
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "convert_false_to":"(not set)",
      "vtp_javascript":["template","(function(){return document.querySelectorAll?!!document.querySelectorAll('a[href*\\x3d\"sci-hub\"]').length:null})()();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.deliveryPlatform"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(JSON.parse\u0026\u0026document.querySelector){var a=document.querySelector('script[type\\x3d\"application\/ld+json\"]');return a?JSON.parse(a.textContent):null}return null})();"]
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",12],8,16],"||(",["escape",["macro",13],8,16],"?\"aws\":\"(not set)\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.journal.title"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",15],8,16],"||window._pageMetaData.citation_journal_title||null})();"]
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],",b=",["escape",["macro",6],8,16],",c=",["escape",["macro",16],8,16],";return b(a(c))})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.article.doi"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",18],8,16],";return a?a:window._pageMetaData.citation_doi\u0026\u0026\"string\"===typeof window._pageMetaData.citation_doi?window._pageMetaData.citation_doi.replace(\/^doi:\/,\"\"):null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return\"string\"===typeof a?a.split(\"\/\").join(\"-\"):a}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.publishedAtString"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",21],8,16],"||window._pageMetaData.citation_date||null})();"]
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",20],8,16],",b=",["escape",["macro",22],8,16],";return a(b)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.publishedAt"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",24],8,16],";if(b)return b;try{var a=(new Date(window._pageMetaData.citation_date)).getTime();return a\u0026\u0026!isNaN(a)?a:null}catch(c){return null}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.journal.issue"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",26],8,16],"||window._pageMetaData.citation_issue||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.journal.volume"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",28],8,16],"||window._pageMetaData.citation_volume||null})();"]
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_true_to":"1",
      "convert_false_to":"0",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.authorization.status"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",30],8,16],"||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"session.authentication.legacy.webtrendsSiteID"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",32],8,16],"||window._pageMetaData.site_id||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.profile.profileInfo.profileID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",34],8,16],"||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.copyright.legacy.webtrendsLicenceType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",36],8,16],"||\"(not set)\"})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.copyright.legacy.webtrendsContentCategory"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",38],8,16],"||\"(not set)\"})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.copyright.legacy.webtrendsContentCollection"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",40],8,16],"||\"(not set)\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.category.legacy.webtrendsContentGroup"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",42],8,16],"||window._pageMetaData.product_name||window._pageMetaData.citation_journal_title||null})();"]
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],",b=",["escape",["macro",6],8,16],",c=",["escape",["macro",43],8,16],";return b(a(c))})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.category.legacy.webtrendsContentSubGroup"
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",45],8,16],"||window._pageMetaData[\"WT.cg_s\"]||null})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.category.legacy.webtrendsPrimaryArticleType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",47],8,16],"||\"(not set)\"})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.category.legacy.webtrendsSubjectTerms"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",49],8,16],"||\"(not set)\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.cms"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",51],8,16],"||(",["escape",["macro",13],8,16],"?\"polopoly\":null)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.authors"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return(",["escape",["macro",53],8,16],"||[]).join(\";\")||window._pageMetaData.citation_authors||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.title"
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",55],8,16],"||window._pageMetaData.citation_title||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.attributes.template"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",57],8,16],"||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"version"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",59],8,16],"||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.search.keywords"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",6],8,16],",a=",["escape",["macro",61],8,16],";return a?b(a):\"(not set)\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.profile.profileInfo.bpid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",63],8,16],"||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.attributes.featureFlags"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return!!a\u0026\u0026Array===a.constructor}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,e){var b=",["escape",["macro",66],8,16],",d=[];if(b(a)){b=a.length;for(var c=0;c\u003Cb;++c)d.push(e(a[c]))}return d}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",65],8,16],"||[],c=",["escape",["macro",67],8,16],";return c(b,function(a){return\"string\"===typeof a?a+\"\\x3dtrue\":a.name?[a.name,!!a.active].join(\"\\x3d\"):\"\"}).join(\";\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.features"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",67],8,16],",c=",["escape",["macro",69],8,16],"||[];return b(c,function(a){return a.name?[a.name,!!a.present].join(\"\\x3d\"):\"\"}).join(\";\")||null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",58],8,16],",a=",["escape",["macro",17],8,16],",b=",["escape",["macro",46],8,16],";b=\/^editorial$|^world view$|^muse$|^seven days$|^news$|^news q and a$|^news explainer$|^news feature$|^comment$|^books and arts$|^books and arts q and a$|^correspondence$|^obituary$|^news.*views$|^news and views forum$|^futures$|^toolbox$|^career news$|^career feature$|^career q and a$|^career brief$|^career column$|^spotlight$|^career guide$|^technology feature$|^outlook$|^nature index$|^introduction$|^outline$|^correction$|^retraction$|^clarification$|^research highlight$|^research highlights$|^nature podcast$|^innovations in$|^nature careers podcast$|^nature briefing$|^arts review$|^book review$|^essay$|^news round\/.test(b);\na=\/^nature$\/.test(a);return\/magazine\/.test(c)||!0===b\u0026\u0026!0===a?\"magazine\":\"not magazine\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",17],8,16],".concat(",["escape",["macro",71],8,16],");return\/^naturemagazine$\/.test(a)?\"magazine nature\":",["escape",["macro",71],8,16],"})();"]
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.collection.id"
    },{
      "function":"__j",
      "vtp_name":"Krux.user"
    },{
      "function":"__j",
      "vtp_name":"Krux.segments"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"mkt-key",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.documentType"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"briefingRedirectSource"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"unsupported\";\"connection\"in navigator\u0026\u0026(a=navigator.connection.saveData?\"on\":\"off\");return a})();"]
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"briefingRedirectEid"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"acdid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"idp_marker"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"user.profile.profileInfo.resolvedBy"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"VSNUO",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","2","group",["macro",4]],["map","index","3","group",["macro",9]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",10]],["map","fieldName","anonymizeIp","value","true"]],
      "vtp_trackerName":"",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",11]],["map","index","4","dimension",["macro",14]],["map","index","5","dimension",["macro",17]],["map","index","6","dimension",["macro",19]],["map","index","8","dimension",["macro",23]],["map","index","9","dimension",["macro",25]],["map","index","10","dimension",["macro",27]],["map","index","11","dimension",["macro",29]],["map","index","12","dimension",["macro",31]],["map","index","13","dimension",["macro",33]],["map","index","14","dimension",["macro",35]],["map","index","16","dimension",["macro",37]],["map","index","17","dimension",["macro",39]],["map","index","18","dimension",["macro",41]],["map","index","19","dimension",["macro",44]],["map","index","20","dimension",["macro",46]],["map","index","21","dimension",["macro",48]],["map","index","22","dimension",["macro",50]],["map","index","23","dimension",["macro",52]],["map","index","25","dimension",["macro",54]],["map","index","26","dimension",["macro",56]],["map","index","27","dimension",["macro",58]],["map","index","28","dimension",["macro",60]],["map","index","30","dimension",["macro",62]],["map","index","60","dimension",["macro",9]],["map","index","61","dimension",["macro",64]],["map","index","63","dimension",["macro",68]],["map","index","72","dimension",["macro",70]],["map","index","74","dimension",["macro",72]],["map","index","65","dimension",["macro",73]],["map","index","1","dimension",["macro",74]],["map","index","2","dimension",["macro",75]],["map","index","75","dimension",["macro",76]],["map","index","78","dimension",["macro",77]],["map","index","80","dimension",["macro",78]],["map","index","79","dimension",["macro",79]],["map","index","81","dimension",["macro",80]],["map","index","82","dimension",["macro",81]],["map","index","84","dimension",["macro",73]],["map","index","86","dimension",["macro",82]],["map","index","90","dimension",["macro",83]],["map","index","91","dimension",["macro",83]],["map","index","92","dimension",["macro",84]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-71668177-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"productId",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"FRAGMENT",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=Bootstrapper.npg.utils.Consent;return a.allow(a.TARGETING)?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=Bootstrapper.npg.utils.Consent;return a.allow(a.PERFORMANCE)?!0:!1})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nonInteraction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",2],8,16],",b=",["escape",["macro",3],8,16],";return a?a:b?b:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",99],8,16],";return a\u0026\u0026\"journal\"===a?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",99],8,16],";return!a||\"article\"!==a\u0026\u0026\"figure\"!==a\u0026\u0026\"issue\"!==a\u0026\u0026\"table\"!==a\u0026\u0026\"metrics\"!==a\u0026\u0026\"compound\"!==a\u0026\u0026\"scheme\"!==a?!1:!0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",99],8,16],";return!a||\"search_results\"!==a\u0026\u0026\"journal-info\"!==a\u0026\u0026\"collection\"!==a\u0026\u0026\"publisher-level-subject\"!==a\u0026\u0026\"journal-articles\"!==a\u0026\u0026\"advanced_search\"!==a\u0026\u0026\"volume\"!==a\u0026\u0026\"journal-level-subject\"!==a\u0026\u0026\"site-index\"!==a\u0026\u0026\"magazine-index-page\"!==a\u0026\u0026\"volumes\"!==a\u0026\u0026\"contact\"!==a\u0026\u0026\"collection-articles\"!==a\u0026\u0026\"collections\"!==a\u0026\u0026\"subjects-homepage\"!==a\u0026\u0026\"journal-subjects\"!==a\u0026\u0026\"collection-info\"!==a\u0026\u0026\"static\"!==a\u0026\u0026\"issue-page\"!==a\u0026\u0026\"magazine-index-latest-careers\"!==a\u0026\u0026\"magazine-index-latest-news\"!==\na\u0026\u0026\"nature-briefing-unsubscribe-page\"!==a\u0026\u0026\"magazine-index-latest-research-analysis\"!==a\u0026\u0026\"magazine-index-latest-opinion\"!==a\u0026\u0026\"magazine-index-latest-books-culture\"!==a?!1:!0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return null})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-71668177-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",78],8,16],",b=",["escape",["macro",80],8,16],";return a||b?!0:!1})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-track-action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.journal.pcode"
    },{
      "function":"__u",
      "vtp_component":"PROTOCOL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=Bootstrapper.npg.utils.Consent;return a.allow(a.FUNCTIONAL)?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",108],8,16],";return a\u0026\u0026(-1\u003Ca.indexOf(\"test-www\")||-1\u003Ca.indexOf(\"local-www\"))?\"\/\/recommended-qa.springernature.app\/latest\/generated\/entry-point.js\":\"\/\/recommended.springernature.com\/latest\/generated\/entry-point.js\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b){if(b){var a=null,c=",["escape",["macro",65],8,16],";c\u0026\u0026(a=c.find(function(a){return a.name===b\u0026\u0026a.active}));return a\u0026\u0026a.active?!0:!1}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",115],8,16],"(\"ab_test_magazine_institution_survey\")})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"ab_test_magazine_institution_survey"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",115],8,16],"(\"ab_test_magazine_paywall\")})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"ab_test_magazine_paywall"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"backHalfContent"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.copyright.open"
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],",b=",["escape",["macro",6],8,16],",c=",["escape",["macro",8],8,16],";return b(a(c))})();"]
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "convert_true_to":"granted",
      "convert_false_to":"denied",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",30],8,16],"||null})();"]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "convert_null_to":"fish",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.copyright.open"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.ga.getAll()[0].get(\"clientId\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",75],8,16],";b=\/t8x81149p|t8x84p76g|t8x88awao|t8x9alusn\/.test(b);var a=",["escape",["macro",74],8,16],";a=\/[a-z]\/.test(a);return!0===b\u0026\u0026!0===a?\"usabilla survey SciRep ACD\":!0===a?\"usabilla survey\":\"do not include\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(){var a=",["escape",["macro",116],8,16],"?\"ab_test_magazine_institution_survey\":\"ab_test_magazine_paywall\";window.Cookies.set(a,\"submitted\",{expires:31536E3,domain:\".nature.com\"})}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(){function e(c){var a=c.target;a=null!==a.getAttribute(\"href\")||null!==a.getAttribute(\"xlink:href\")||a.parentElement.classList.contains(\"paywall-box__button\");c.preventDefault();a\u0026\u0026(",["escape",["macro",128],8,16],"(),b.removeEventListener(\"click\",d,!1))}var b=document.querySelector(\"#usabilla-paywall-widget-container\");var d=e.bind(this);b\u0026\u0026b.addEventListener(\"click\",d,!1)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return\"object\"===typeof a\u0026\u0026null!==a}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b){do{if(b(a))return a;a=a.parentNode}while(a)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(d,b,c){var e=",["escape",["macro",131],8,16],";return e(d,function(a){return a.hasAttribute\u0026\u0026a.hasAttribute(b)\u0026\u0026(\"undefined\"===typeof c||a.getAttribute(b)===c)})}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b){var c=",["escape",["macro",66],8,16],";return\"array\"===b\u0026\u0026!0===c(a)||typeof a===b?a:null}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b,f){var g=",["escape",["macro",132],8,16],",d=function(){var c=g(b,\"data-track-component\");if(c)return c.getAttribute(\"data-track-component\");c=",["escape",["macro",57],8,16],";var a=",["escape",["macro",2],8,16],";return c\u0026\u0026a?c+\":\"+a:c||a||\"\"},a=function(){var a=g(b,\"data-track-component\");return a?a.getAttribute(\"data-track-component\")+\":\"+f:f};a=b.getAttribute(\"data-track-action\")||a();d=b.getAttribute(\"data-track-category\")||d();var e;(e=b.getAttribute(\"data-track-label\"))||(e=b.href\u0026\u0026window.location.hostname!==\nb.hostname?b.href:null);a={action:a,category:d,label:e};return a.label?a:null}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"promotion"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){var c=",["escape",["macro",133],8,16],";a=parseInt(a.getAttribute(\"data-track-promotion\"),10);var b=",["escape",["macro",135],8,16],";if(!isNaN(a)\u0026\u0026c(b,\"array\")\u0026\u0026b.length\u003Ea)return b=b[a],{id:c(b.promotionInfo.promotionID,\"string\"),name:c(b.promotionInfo.promotionName,\"string\"),position:\"slot\"+a}}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){var b=",["escape",["macro",137],8,16],";a=parseInt(a.getAttribute(\"data-track-product\"),10);return productAtIndex(b,a)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,c){var b=",["escape",["macro",133],8,16],";if(!isNaN(c)\u0026\u0026b(a,\"array\")\u0026\u0026a.length\u003Ec)return a=a[c],{id:b(a.productInfo.sku,\"string\"),name:b(a.productInfo.productName,\"string\"),brand:b(a.productInfo.brand,\"string\"),variant:b(a.category.productType,\"string\"),price:b(a.price.basePrice,\"number\").toString(),position:\"slot\"+c}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){window.dataLayer.push({event:\"interactive-event\",eventAction:a.action,eventCategory:a.category,eventLabel:a.label||void 0,eventValue:a.value||void 0,nonInteraction:a.nonInteraction||!1})}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b,a){var c=",["escape",["macro",132],8,16],",d=",["escape",["macro",134],8,16],",e=",["escape",["macro",140],8,16],";(b=c(b,\"data-track\",a))\u0026\u0026(a=d(b,a))\u0026\u0026e(a)}})();"]
    },{
      "function":"__c",
      "vtp_value":"5dde6c3893906e530d7270d7"
    },{
      "function":"__c",
      "vtp_value":"5dde7c19658b762edd212ee4"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.category.pageType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OnetrustActiveGroups"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return-1!==",["escape",["macro",145],8,16],".indexOf(\",3,\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"string\"===typeof ",["escape",["macro",145],8,16],"\u0026\u00260\u003C",["escape",["macro",145],8,16],".length?-1!==",["escape",["macro",145],8,16],".indexOf(\",2,\"):!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return-1!==",["escape",["macro",145],8,16],".indexOf(\",1,\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return-1!==",["escape",["macro",145],8,16],".indexOf(\",4,\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.author"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){arg=",["escape",["macro",150],8,16],";var a=0\u003Carg.length?arg.join(\";\"):null;return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"session.authentication.authenticationID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){arg=",["escape",["macro",152],8,16],";var a=0\u003Carg.length?arg.join(\"|\"):null;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector);return function(a,b){for(console.log(a);a!==document.documentElement\u0026\u0026!a.matches(b);)a=a.parentElement;return a.matches(b)?a:void 0}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.journal.section"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function b(a,b){a=a.map(function(a){return a[b]});return 0\u003Ca.length?a=a.join(\";\"):null}arr=",["escape",["macro",155],8,16],";arg=\"sectionName\";return b(arr,arg)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"session.authentication.authenticationIDString"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"session.authentication.entitled"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"session.authentication.method"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"version"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-track"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-track-category"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-track-label"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-track-value"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent\u0026\u0026a.attachEvent(\"on\"+b,function(){window.event.target=window.event.srcElement;c.apply(a,[window.event])})}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.template"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b){function l(){var b=!0,a={\"page.category.pageType\":[",["escape",["macro",2],8,16],",\"string\"],\"content.attributes.template\":[",["escape",["macro",166],8,16],",\"string\"]},c;for(c in a){var d=a[c][0];var e=a[c][1];d=\"array\"===e\u0026\u0026!0===Array.isArray(d)?d:typeof d===e?d:null;d||(g(\"required\",c),b=!1);\"string\"==a[c][1]\u0026\u00261\u003Ea[c][0].length\u0026\u0026(g(\"empty\",c),b=!1)}return b}function g(a,b){var c;\"required\"==a\u0026\u0026(c=\"Required Field Misspecified\");\"empty\"==a\u0026\u0026(c=\"Missing Value\");a=\"dataLayerError: \"+c+\" (\"+\nb+\")\";console.error(a)}var e=b.getAttribute(\"data-track\"),h=",["escape",["macro",132],8,16],"(b,\"data-track-component\"),a={};if(!1===l())return null;if(\"click\"===e){var k=b.getAttribute(\"data-track-label\")||(b.href\u0026\u0026window.location.hostname!==b.hostname?b.href:null),m=b.getAttribute(\"data-track-category\")||",["escape",["macro",166],8,16],"+\":\"+",["escape",["macro",2],8,16],",f=b.getAttribute(\"data-track-action\");b.getAttribute(\"checked\");h\u0026\u0026!f\u0026\u0026(f=h.getAttribute(\"data-track-component\")+\":\"+e);if(k)return a.event=\"data-track\",a.eventAction=\nf,a.eventCategory=m,a.eventLabel=k,a;console.error(\"dataLayerError: More Arguments Needed (data-track-label)\");return null}if(\"download\"===e)return a.event=\"data-track\",a.eventAction=\"download\",a.category=",["escape",["macro",166],8,16],"+\":\"+",["escape",["macro",2],8,16],",a.eventLabel=b.getAttribute(\"href\"),a}})();"]
    },{
      "function":"__v",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"session.authentication.token"
    },{
      "function":"__c",
      "vtp_value":"true"
    },{
      "function":"__v",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.profile.profileInfo.clientID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.href.substr(window.location.href.indexOf(\"mkt-key\\x3d\")+8)||null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",49],8,16],"?",["escape",["macro",49],8,16],".split(\";\"):[\"(not set)\"]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",19],8,16],";a=\/10\\.1038\\\/nphys1404\/.test(a);return!0===a?\"usabilla survey VSNU DOI\":\"do not include\"})();"]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollDirection",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":9999,
      "teardown_tags":["list",["tag",73,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EBootstrapper=window.Bootstrapper||{};Bootstrapper.npg=Bootstrapper.npg||{};Bootstrapper.npg.utils=Bootstrapper.npg.utils||{};\nBootstrapper.npg.utils.Request=function(h,e){var f=function(){for(var a,b={},c=\/([^\u0026=]+)=?([^\u0026]*)\/g,d=h.location.search.substring(1);a=c.exec(d);)b[decodeURIComponent(a[1].replace(\/\\+\/g,\" \"))]=decodeURIComponent(a[2].replace(\/\\+\/g,\" \"));return b}(),g=function(){for(var a=document.cookie.split(\/;\\s*\/),b,c=a.length,d={};c--;)b=a[c].split(\"\\x3d\"),d[b[0]]=b.slice(1).join(\"\\x3d\");return d}();return{get:function(a){return 1===arguments.length?f[a]||e:f},cookie:function(a){return 0===arguments.length?g:\n1===arguments.length?g[a]||e:this.setCookie.apply(this,[].slice.call(arguments,0))},deleteCookies:function(a,b){for(var c=0;c\u003Ca.length;++c)this.deleteCookie(a[c],b)},deleteCookie:function(a,b){b=b||{};b.days=-1;this.setCookie(a,\"\",b)},setCookie:function(a,b,c){a=[a+\"\\x3d\"+b];c=c||{};c.days\u0026\u0026(b=new Date,b.setTime(+b+864E5*c.days),a.push(\"expires\\x3d\"+b.toGMTString()));c.path\u0026\u0026a.push(\"path\\x3d\"+c.path);c.domain\u0026\u0026a.push(\"domain\\x3d\"+c.domain);document.cookie=a.join(\";\");return!0},deleteCookiesByPattern:function(a,\nb){for(var c=new RegExp(\"(?:^|;|\\\\s)(\"+a+\"[^\\x3d]*)\",\"g\"),d=[],e;null!==(e=c.exec(document.cookie));)d.push(e[1]);this.deleteCookies(d,b)}}}(window);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":33
    },{
      "function":"__html",
      "priority":999,
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c){b.location.pathname.match(\/^\\\/(nature_education|scitable|principles)(\\\/|$)\/)||b.location.hostname.match(\"natureindex.com\")||c.addEventListener(\"accessdetailsloaded\",function(a){if(a=a.detail)b._pageMetaData=b._pageMetaData||{},b._pageMetaData.site_id=a.site_id\u0026\u0026a.site_id.join?a.site_id.join(\";\"):\"\",b._pageMetaData.user_id=a.registrant_id||\"\",b._pageMetaData.business_partner_id=a.business_partner_id\u0026\u0026a.business_partner_id.join?a.business_partner_id.join(\";\"):\"\";a=c.createElement(\"script\");\na.className=\"kxct\";a.setAttribute(\"data-id\",\"Jn7TaPwq\");a.setAttribute(\"data-timing\",\"async\");a.setAttribute(\"data-version\",\"3.0\");a.appendChild(c.createTextNode('window.Krux||((Krux\\x3dfunction(){Krux.q.push(arguments)}).q\\x3d[]);(function(){var k\\x3ddocument.createElement(\"script\");k.type\\x3d\"text\/javascript\";k.async\\x3dtrue;var m,src\\x3d(m\\x3dlocation.href.match(\/\\\\bkxsrc\\x3d([^\\x26]+)\/))\\x26\\x26decodeURIComponent(m[1]);k.src \\x3d \/^https?:\\\\\/\\\\\/([a-z0-9_\\\\-\\\\.]+\\\\.)?krxd\\\\.net(:\\\\d{1,5})?\\\\\/\/i.test(src) ? src : src \\x3d\\x3d\\x3d \"disable\" ? \"\" :(location.protocol\\x3d\\x3d\\x3d\"https:\"?\"https:\":\"http:\")+\"\/\/cdn.krxd.net\/controltag?confid\\x3dJn7TaPwq\";var s\\x3ddocument.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(k,s);}());'));\nc.head.appendChild(a);a=Bootstrapper.npg.utils.Consent;a=a.allow(a.TARGETING);Krux(\"consent:set\",{dc:a,al:a,tg:a,cd:!1,sh:!1,re:!1},function(a,b){a\u0026\u0026console.error(a)})},!1)})(window,document);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":18
    },{
      "function":"__html",
      "priority":999,
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar script=document.createElement(\"script\");script.className=\"kxct\";script.dataset.id=\"KT36N7KK\";script.dataset.timing=\"async\";script.dataset.version=\"3.0\";script.type=\"text\/javascript\";script.innerHTML='window.Krux||((Krux\\x3dfunction(){Krux.q.push(arguments)}).q\\x3d[]);(function(){var k\\x3ddocument.createElement(\"script\");k.type\\x3d\"text\/javascript\";k.async\\x3dtrue;var m,src\\x3d(m\\x3dlocation.href.match(\/\\\\bkxsrc\\x3d([^\\x26]+)\/))\\x26\\x26decodeURIComponent(m[1]);k.src \\x3d \/^https?:\\\\\/\\\\\/([a-z0-9_\\\\-\\\\.]+\\\\.)?krxd\\\\.net(:\\\\d{1,5})?\\\\\/\/i.test(src) ? src : src \\x3d\\x3d\\x3d \"disable\" ? \"\" :(location.protocol\\x3d\\x3d\\x3d\"https:\"?\"https:\":\"http:\")+\"\/\/cdn.krxd.net\/controltag\/KT36N7KK.js\";var s\\x3ddocument.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(k,s);}());';\ndocument.head.appendChild(script);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":20
    },{
      "function":"__opt",
      "priority":99,
      "metadata":["map"],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_optimizeContainerId":"GTM-P8FX28R",
      "vtp_gaSettings":["macro",85],
      "tag_id":58
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"OneTrust Cookie Consent",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"Banner Display",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1
    },{
      "function":"__cegg",
      "once_per_event":true,
      "vtp_usersNumericId":"00170661",
      "tag_id":5
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":7
    },{
      "function":"__paused",
      "vtp_originalTagType":"asp",
      "tag_id":8
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":10
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":15
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":21
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":22
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":26
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":27
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":28
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":32
    },{
      "function":"__ua",
      "teardown_tags":["list",["tag",76,0]],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",85],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":36
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Collections Event Exit",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"Exit Click",
      "vtp_eventLabel":["macro",92],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":39
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":42
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",94],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",95],
      "vtp_eventCategory":["macro",96],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["macro",97],
      "vtp_eventLabel":["macro",98],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":43
    },{
      "function":"__crto",
      "once_per_event":true,
      "vtp_accountId":"60881",
      "vtp_tagType":"HOME_TAG",
      "vtp_siteType":["macro",101],
      "tag_id":48
    },{
      "function":"__crto",
      "once_per_event":true,
      "vtp_accountId":"60881",
      "vtp_productID":["macro",19],
      "vtp_tagType":"PRODUCT_TAG",
      "vtp_siteType":["macro",101],
      "tag_id":49
    },{
      "function":"__crto",
      "once_per_event":true,
      "vtp_accountId":"60881",
      "vtp_tagType":"LISTING_TAG",
      "vtp_listingID":["macro",104],
      "vtp_siteType":["macro",101],
      "tag_id":50
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"reading",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"30-seconds-reading",
      "vtp_eventLabel":["macro",18],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":51
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"paywall",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",106],
      "vtp_eventAction":"learn about institutional subscriptions",
      "vtp_eventLabel":"link",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":52
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"paywall",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",106],
      "vtp_eventAction":"log in",
      "vtp_eventLabel":"link",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":53
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"paywall",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",106],
      "vtp_eventAction":"athens",
      "vtp_eventLabel":"link",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":54
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"paywall",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",106],
      "vtp_eventAction":"shibboleth",
      "vtp_eventLabel":"link",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":55
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":57
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"scroll-depth",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"scrolling",
      "vtp_eventLabel":["template",["macro",109],"%"],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":63
    },{
      "function":"__baut",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_tagId":"12000044",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":66
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"magazine test paywall",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"in view",
      "vtp_eventLabel":"paywall box",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":76
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Nature Magazine Institution Survey",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"in view",
      "vtp_eventLabel":"institution survey",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":77
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":305
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Article body",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"author link - publication",
      "vtp_eventLabel":"link",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":311
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Article body",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"author link - pubmed",
      "vtp_eventLabel":"link",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":314
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Article body",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"author link - scholar",
      "vtp_eventLabel":"link",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":315
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_77",
      "tag_id":334
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"30000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"10482319_145",
      "tag_id":335
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_150",
      "tag_id":336
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_151",
      "tag_id":337
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_152",
      "tag_id":338
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_153",
      "tag_id":339
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25,50,75,100",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"10482319_193",
      "vtp_enableTriggerStartOption":true,
      "tag_id":340
    },{
      "function":"__evl",
      "vtp_elementId":"gtm-usabilla-survey-widget",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"100",
      "vtp_uniqueTriggerId":"10482319_289",
      "tag_id":341
    },{
      "function":"__evl",
      "vtp_elementId":"usabilla-paywall-widget-container",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"100",
      "vtp_uniqueTriggerId":"10482319_290",
      "tag_id":342
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25,50,75,100",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"10482319_294",
      "vtp_enableTriggerStartOption":true,
      "tag_id":343
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_312",
      "tag_id":344
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_313",
      "tag_id":345
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_316",
      "tag_id":346
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction splitKeys(a){var d=[],c=\"\",f=[],h=a.split(\";\");for(a=0;a\u003Ch.length;++a){void 0!==k\u0026\u0026(c=k);var g=h[a].split(\"\\x3d\");var k=g[0];k!==c\u0026\u0026(0\u003Cc.length\u0026\u00260\u003Cd.length\u0026\u0026f.push([c,d]),d=[]);if(2===g.length\u0026\u0026\"\"!==g[0]\u0026\u0026\"\"!==g[1]){var b=g[1].split(\",\");for(g=0;g\u003Cb.length;++g)d.push(b[g])}}0\u003Ck.length\u0026\u00260\u003Cd.length\u0026\u0026f.push([k,d]);return f}\nfunction splitSizes(a){var d=[];if(null!==a){var c=-1!==a.indexOf(\"|\")?a.split(\"|\"):a.split(\",\");for(a=0;a\u003Cc.length;++a){var f=c[a].split(\"x\");var h=parseInt(f[0],10);var g=parseInt(f[1],10);2===f.length\u0026\u0026!isNaN(h)\u0026\u0026!isNaN(g)\u0026\u00260\u003C=h\u0026\u00260\u003C=g\u0026\u0026d.push([h,g])}}return d}function hasClass(a,d){var c,f=a.className.split(\/\\s+\/);var h=0;for(c=f.length;h\u003Cc;++h)if(f[h]===d)return!0;return!1}\nfunction getAdContainers(){if(\"function\"===typeof document.getElementsByClassName)return document.getElementsByClassName(\"div-gpt-ad\");var a,d=[],c=document.getElementsByTagName(\"div\");for(a=0;c[a];++a)hasClass(c[a],\"div-gpt-ad\")\u0026\u0026d.push(c[a]);return d}function debounce(a,d){var c=null,f=null;return function(){var h=this,g=+new Date,k=arguments;c\u0026\u0026g\u003Cc+d?(clearTimeout(f),f=setTimeout(function(){c=g;a.apply(h,k)},d)):(c=g,a.apply(h,k))}}\nfunction addResizeEvent(a){window.addEventListener?window.addEventListener(\"resize\",a,!1):window.attachEvent(\"resize\",a)}function addScrollEvent(a){window.addEventListener?window.addEventListener(\"scroll\",a,!1):window.attachEvent(\"onscroll\",a)}function removeScrollEvent(a){window.removeEventListener?window.removeEventListener(\"scroll\",a,!1):window.detachEvent(\"scroll\",a)}\n(function(a,d,c){var f=Bootstrapper.npg.utils,h=f.Consent;c=c||{};if(\"true\"!==f.Request.get(\"hide_ads\")){var g=\"true\"===f.Request.get(\"debug_collections\");$.getScript(\"\/\/www.googletagservices.com\/tag\/js\/gpt.js\",function(){var f=c.dfppKeyValues\u0026\u0026h.allow(h.TARGETING)?\";\"+c.dfppKeyValues:\"\",b=[],p=getAdContainers(),l,x=function(e,a){for(var b=e.length,t=[];b--;)a(e[b],b)\u0026\u0026(t.push(e[b].slot),e.splice(b,1));t.length\u0026\u0026googletag.pubads().refresh(t);return e},y=function(e){var a=Bootstrapper.npg.utils.Request.get(\"test\");\na=a\u0026\u0026\"ads\"===a?\";adtyp\\x3dtest\":\"\";e=e.getAttribute(\"data-gpt-targeting\");a\u0026\u0026-1===e.indexOf(a)\u0026\u0026(e+=a);return e+f},z=function(e){a:{var b=a.location.pathname;for(var c=[\"d42473-018-00006-2\",\"d42473-018-00009-z\",\"d42473-018-00004-4\",\"d42473-018-00014-2\"],d=0;c[d];++d)if(-1!==b.indexOf(\"\/\"+c[d])){b=!0;break a}b=!1}return b?\"\/270604982\/Nature\/brandedcontent\":g?e.replace(\"\/nature.com\",\"\"):e};a.googletag=a.googletag||{};a.googletag.cmd=a.googletag.cmd||[];for(var u=0;p[u];++u){var m=p[u];-1!==m.className.indexOf(\"leaderboard\")\u0026\u0026\n729\u003Ewindow.innerWidth||b.push({divId:m.getAttribute(\"id\"),adUnitPath:z(m.getAttribute(\"data-gpt-unitpath\")),sizeArray:splitSizes(m.getAttribute(\"data-gpt-sizes\")),targeting:splitKeys(y(m)),isOutOfPage:hasClass(m,\"out-of-page\"),forceLoadOnInit:!1,refreshed:!1})}googletag.cmd.push(function(){googletag.pubads().setRequestNonPersonalizedAds(h.allow(h.TARGETING)?0:1);googletag.pubads().disableInitialLoad();googletag.enableServices();googletag.pubads().addEventListener(\"slotRenderEnded\",function(e){var a=\ne.slot.j?e.slot.j.m:e.slot.l?e.slot.l.m:null;console.log(a,e.isEmpty);if(\"div-gpt-ad-billboard-2\"===a\u0026\u0026!1===e.isEmpty){console.log(a,e.isEmpty);var b=document.getElementById(a);b.parentNode.parentNode.classList.add(\"pb40\");b.parentNode.parentNode.classList.remove(\"pb20\");b.parentNode.parentNode.classList.remove(\"hide\")}a\u0026\u0026e.isEmpty\u0026\u0026(b=document.getElementById(a),b.parentNode.parentNode.classList.remove(\"pb20\"),b.parentNode.classList.remove(\"ad-with-label\"))})});googletag.cmd.push(function(){for(var a=\n0;b[a];++a)try{b[a].slot=b[a].isOutOfPage?googletag.defineOutOfPageSlot(b[a].adUnitPath,b[a].divId).addService(googletag.pubads()):googletag.defineSlot(b[a].adUnitPath,b[a].sizeArray,b[a].divId).addService(googletag.pubads());for(var c=0,d=b[a].targeting.length;c\u003Cd;++c)if(2===b[a].targeting[c].length\u0026\u0026\"\"!==b[a].targeting[c][0]\u0026\u0026\"\"!==b[a].targeting[c][1]){if(\"pos\"===b[a].targeting[c][0]\u0026\u0026\"billboard\"===b[a].targeting[c][1][0]){l=b[a].slot;var f=googletag.sizeMapping().addSize([970,250],[3,3]).addSize([770,\n100],[4,4]).addSize([0,0],[5,5]).build();l.defineSizeMapping(f);l.setCollapseEmptyDiv(!0,!0)}b[a].slot.setTargeting(b[a].targeting[c][0],b[a].targeting[c][1])}}catch(A){console.log(\"failed to create slot for\",b[a])}});googletag.cmd.push(function(){for(var a=0;b[a];++a)googletag.display(b[a].divId)});var v=function(b){var c=Math.max(d.clientHeight,a.innerHeight||0);return x(b,function(a){if(a.isOutOfPage||a.forceLoadOnInit)return!0;a=document.getElementById(a.divId);a=a.getBoundingClientRect();a=a.top-\n300;return c\u003Ea})};googletag.cmd.push(function(){b=v(b)});var n=969\u003Cwindow.innerWidth,q=769\u003Cwindow.innerWidth\u0026\u0026!n,r=770\u003Ewindow.innerWidth;p=debounce(function(){var a=window.innerWidth;970\u003C=a\u0026\u0026!n?(n=!0,r=q=!1,googletag.cmd.push(function(){googletag.pubads().refresh([l])})):770\u003Ea\u0026\u0026!r?(q=n=!1,r=!0,googletag.cmd.push(function(){googletag.pubads().refresh([l])})):970\u003Ea\u0026\u0026769\u003Ca\u0026\u0026!q\u0026\u0026(n=!1,q=!0,r=!1,googletag.cmd.push(function(){googletag.pubads().refresh([l])}))},250);var w=debounce(function(){googletag.cmd.push(function(){b=\nv(b);b.length||removeScrollEvent(w)})},250);addResizeEvent(p);addScrollEvent(w)})}})(window,document.documentElement,window.Krux);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":14
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction splitKeys(b){var k=[],e=\"\",h=[],c=b.split(\";\");for(b=0;b\u003Cc.length;++b){void 0!==l\u0026\u0026(e=l);var g=c[b].split(\"\\x3d\");var l=g[0];l!==e\u0026\u0026(0\u003Ce.length\u0026\u00260\u003Ck.length\u0026\u0026h.push([e,k]),k=[]);if(2===g.length\u0026\u0026\"\"!==g[0]\u0026\u0026\"\"!==g[1]){var n=g[1].split(\",\");for(g=0;g\u003Cn.length;++g)k.push(n[g])}}0\u003Cl.length\u0026\u00260\u003Ck.length\u0026\u0026h.push([l,k]);return h}\nfunction getScript(b,k){var e=document.createElement(\"script\"),h=document.getElementsByTagName(\"script\")[0];e.async=1;e.onload=e.onreadystatechange=function(b,g){if(g||!e.readyState||\/loaded|complete\/.test(e.readyState))e.onload=e.onreadystatechange=null,e=void 0,g||k\u0026\u0026k()};e.src=b;h.parentNode.insertBefore(e,h)}\nfunction splitSizes(b){var k=[];if(null!==b){var e=-1!==b.indexOf(\"|\")?b.split(\"|\"):b.split(\",\");for(b=0;b\u003Ce.length;++b){var h=e[b].split(\"x\");var c=parseInt(h[0],10);var g=parseInt(h[1],10);2===h.length\u0026\u0026!isNaN(c)\u0026\u0026!isNaN(g)\u0026\u00260\u003C=c\u0026\u00260\u003C=g\u0026\u0026k.push([c,g])}}return k}function hasClass(b,k){var e,h=b.className.split(\/\\s+\/);b=0;for(e=h.length;b\u003Ce;++b)if(h[b]===k)return!0;return!1}\nfunction getAdContainers(){if(\"function\"===typeof document.getElementsByClassName)return document.getElementsByClassName(\"div-gpt-ad\");var b,k=[],e=document.getElementsByTagName(\"div\");for(b=0;e[b];++b)hasClass(e[b],\"div-gpt-ad\")\u0026\u0026k.push(e[b]);return k}function debounce(b,k){var e=null,h=null;return function(){var c=this,g=+new Date,l=arguments;e\u0026\u0026g\u003Ce+k?(clearTimeout(h),h=setTimeout(function(){e=g;b.apply(c,l)},k)):(e=g,b.apply(c,l))}}\nfunction addResizeEvent(b){window.addEventListener?window.addEventListener(\"resize\",b,!1):window.attachEvent(\"resize\",b)}function addScrollEvent(b){window.addEventListener?window.addEventListener(\"scroll\",b,!1):window.attachEvent(\"onscroll\",b)}function removeScrollEvent(b){window.removeEventListener?window.removeEventListener(\"scroll\",b,!1):window.detachEvent(\"scroll\",b)}function serveAdsFor(b){return-1!==b.indexOf(\"\/naturejobs\")?!1:!0}\nfunction initAds(b,k,e){var h=Bootstrapper.npg.utils,c=[],g,l=null;if(\"true\"!==h.Request.get(\"hide_ads\")\u0026\u0026serveAdsFor(b.location.pathname)){var n=function(a){var f=Math.max(k.clientHeight,b.innerHeight||0);return v(a,function(a){if(a.isOutOfPage||a.forceLoadOnInit)return!0;var d=document.getElementById(a.divId),c=d.getBoundingClientRect();c=c.top-300;c=f\u003Ec;var e=null!==d.offsetParent;a=a.sizeArray\u0026\u0026a.sizeArray.length\u0026\u0026a.sizeArray[0].length\u0026\u00262===a.sizeArray[0][0];d=d.getAttribute(\"data-ad-type\")?-1===\nd.getAttribute(\"data-ad-type\").indexOf(\"top\"):!1;var g=770\u003Eb.innerWidth;return c\u0026\u0026e\u0026\u0026!1===g||a||c\u0026\u0026e\u0026\u0026g\u0026\u0026d})},v=function(a,b){for(var d=a.length,f=[];d--;)b(a[d],d)\u0026\u0026(f.push(a[d].slot),a.splice(d,1));f.length\u0026\u0026googletag.pubads().refresh(f);return a},p={\"career feature\":!0,\"career news\":!0,\"career q\\x26a\":!0,\"career brief\":!0,\"career column\":!0,spotlight:!0,\"career guide\":!0,\"technology feature\":!0,\"nature careers podcast\":!0},w=function(){var a=b.dataLayer?",["escape",["macro",111],8,16],":null;if(a)return a;\nif(-1!==b.location.hostname.indexOf(\"guide.labanimal\"))return a=b.location.pathname,a=-1!==a.indexOf(\"categ\")?\"products\":-1!==a.indexOf(\"supplier\")?\"suppliers\":\"homepage\",\"laban\/guide.labanimal\/\"+a;a=b.location.pathname.replace(\/^\\\/+\/,\"\").split(\"\/\");var f=b.location.hostname.split(\".\").slice(1).join(\".\");return a.length\u0026\u0026\"\"!==a[0]?a[0]:f},x=function(a){var f=\"\/270604982\";0!==a.indexOf(\"\/\")\u0026\u0026(a=\"\/\"+a);0===a.indexOf(\"\/285\/\")\u0026\u0026(a=a.replace(\/^\\\/285\\\/[^\\\/]+\/,f+\"\/nature\/\"+w()));a=a.replace(\"\/nature\/laban\",\n\"\/laban\");a=a.replace(\"\/nature\/nature.com\/index\",\"\/nature\/nature\/homepage\");a=a.replace(\"\/collections\/collections\",\"\/collections\");a=a.replace(\"\/search\/search_results\",\"\/nature\/search\");a=a.replace(\/\\\/article$\/,\"\/articles\");a=a.replace(\/\\\/nature\\\/authors\\\/.*\/,\"\/nature\/nature\/authors\");-1!==b.location.hostname.indexOf(\"blogs\")\u0026\u0026(a=a.replace(\/\\\/nature\\\/.*\/,\"\/nature\/nature\/blogs\"));-1!==b.location.hostname.indexOf(\"natureindex\")\u0026\u0026(a=a.replace(\/\\\/nature\\\/.*\/,\"\/nature\/nature_index\"),\"\/\"===b.location.pathname\u0026\u0026\n(a+=\"\/homepage\"));window.dataLayer\u0026\u0026p[",["escape",["macro",7],8,16],"]\u0026\u0026(a=a.replace(\/\\\/articles$\/,\"\/naturecareers\"));a:{if(\/^\\\/nature\\\/articles\\\/?$\/.test(window.location.pathname)){var d=(\/^.*?(?:\\?|\u0026)type=([^\u0026]+)\/.exec(window.location.search)||[\"\",\"\"])[1];if(p[d.replace(\/-\/g,\" \").replace(\/ and \/,\"\\x26\")]){d=!0;break a}}d=!1}d\u0026\u0026(a=a.replace(\/\\\/article-list$\/,\"\/naturecareers\"));(d=document.querySelector('meta[name\\x3d\"brandedcontent\"]'))\u0026\u0026\"true\"===d.getAttribute(\"content\")\u0026\u0026(a=f+\"\/nature\/brandedcontent\");return a},\ny=function(a){for(var f={},d=0;a[d];++d){var c=a[d].size;var e=\"2x2\"===a[d].size?window.dataLayer\u0026\u0026\"core media\"===",["escape",["macro",51],8,16],"\u0026\u0026-1!==b.location.pathname.indexOf(\"\/articles\/\")?3:0:0;f[c]={count:e,name:a[d].name}}return f}([{size:\"728x90\",name:\"LB\"},{size:\"300x250\",name:\"MPU\"},{size:\"160x600\",name:\"SKY\"},{size:\"970x250\",name:\"BB\"},{size:\"2x2\",name:\"NATIVE\"},{size:\"300x100\",name:\"REC\"},{size:\"180x150\",name:\"EVENTS\"},{size:\"160x60\",name:\"TILE\"}]),m=function(a,b,d,c){for(var f=!1,e=0;a[e];++e)a[e][0]===\nb\u0026\u0026null!==d\u0026\u0026(a[e][1]=c?a[e][1].concat(d):[d],f=!0);f||null===d||a.push([b,[d]]);return a},q=function(a,b,d){for(var f=0;a[f];++f)a[f][0]===b\u0026\u0026(a[f][0]=d);return a},z=function(a,f){var d=a;var c=e.dfppKeyValues\u0026\u0026h.Consent.allow(h.Consent.TARGETING)?\";\"+e.dfppKeyValues:\"\";var g=h.Request.get(\"test\");g=g\u0026\u0026\"ads\"===g?\";adtype\\x3dtest\":\"\";d=d.getAttribute(\"data-gpt-targeting\");g\u0026\u0026-1===d.indexOf(g)\u0026\u0026(d+=g);(g=",["escape",["macro",63],8,16],")\u0026\u0026(d+=\";bpid\\x3d\"+g.replace(\/;\/g,\",\"));0===b.location.pathname.indexOf(\"\/collections\/\")\u0026\u0026\n(g=document.querySelector(\"span.hero-title-inner\"))\u0026\u0026(d+=\";sponsored\\x3d\"+g.innerText.replace(\/^\\s+\/,\"\").replace(\/\\s+$\/,\"\").replace(\/\\s+\/g,\"_\").replace(\/\\W+\/g,\"\"));c=d+c;c=q(splitKeys(c),\"artid\",\"articleid\");c=q(c,\"kw\",\"search\");a=a.getAttribute(\"data-gpt-sizes\");a=(a=y[a])?a.name+ ++a.count:null;a=m(c,\"pos\",a);f=m(a,\"tile\",f+1);a=b.location.pathname.split(\"\/\");a=3===a.length\u0026\u0026\"subjects\"===a[1]?a[2]:null;f=m(f,\"subject\",a);f=m(f,\"article\",window.dataLayer\u0026\u0026p[",["escape",["macro",7],8,16],"]?\"naturecareers\":\nnull);a=window.dataLayer?",["escape",["macro",73],8,16],":null;f=m(f,\"collectionID\",a);return f=m(f,\"type\",window.dataLayer\u0026\u0026\"core media\"===",["escape",["macro",51],8,16],"?\"fronthalf\":null,!0)},r=function(a){for(var b=[],d=0;a[d];++d){var c=a[d];b.push({divId:c.getAttribute(\"id\"),adUnitPath:x(c.getAttribute(\"data-gpt-unitpath\")),sizeArray:splitSizes(c.getAttribute(\"data-gpt-sizes\")),targeting:z(c,d),isOutOfPage:hasClass(c,\"out-of-page\"),forceLoadOnInit:!1,refreshed:!1})}return b},t=function(){googletag.cmd.push(function(){googletag.pubads().setRequestNonPersonalizedAds(h.Consent.allow(h.Consent.TARGETING)?\n0:1);googletag.pubads().disableInitialLoad();googletag.enableServices();var a={};googletag.pubads().addEventListener(\"slotRenderEnded\",function(b){var c=b.slot\u0026\u0026b.slot.getSlotElementId?b.slot.getSlotElementId():null,f;a[c]=!b.isEmpty;(a[\"div-gpt-ad-native-2\"]||a[\"div-gpt-ad-native-1\"])\u0026\u0026(f=document.querySelector(\".c-paid-content\"))\u0026\u0026f.classList.remove(\"hide\");\"div-gpt-ad-billboard-2\"===c\u0026\u0026!1===b.isEmpty\u0026\u0026(f=document.getElementById(c),f.parentNode.parentNode.classList.add(\"pb40\"),f.parentNode.parentNode.classList.remove(\"pb20\"),\nf.parentNode.parentNode.classList.remove(\"hide\"));c\u0026\u0026b.isEmpty\u0026\u0026(f=document.getElementById(c),f.parentNode.parentNode.classList.remove(\"pb20\"),f.parentNode.classList.remove(\"ad-with-label\"))})});googletag.cmd.push(function(){for(var a=0;c[a];++a)try{c[a].slot=c[a].isOutOfPage?googletag.defineOutOfPageSlot(c[a].adUnitPath,c[a].divId).addService(googletag.pubads()):googletag.defineSlot(c[a].adUnitPath,c[a].sizeArray,c[a].divId).addService(googletag.pubads());for(var b=0,d=c[a].targeting.length;b\u003Cd;++b)if(2===\nc[a].targeting[b].length\u0026\u0026\"\"!==c[a].targeting[b][0]\u0026\u0026\"\"!==c[a].targeting[b][1]){if(\"pos\"===c[a].targeting[b][0]\u0026\u00260===c[a].targeting[b][1][0].indexOf(\"BB\")){g=c[a].slot;var e=googletag.sizeMapping().addSize([970,250],[3,3]).addSize([770,100],[4,4]).addSize([0,0],[5,5]).build();g.defineSizeMapping(e);g.setCollapseEmptyDiv(!0,!1)}c[a].slot.setTargeting(c[a].targeting[b][0],c[a].targeting[b][1])}}catch(A){console.log(\"failed to create slot for\",c[a])}});googletag.cmd.push(function(){for(var a=0;c[a];++a)googletag.display(c[a].divId)})},\nu=function(){l\u0026\u0026removeScrollEvent(l);googletag.cmd.push(function(){c=n(c)});l=debounce(function(){googletag.cmd.push(function(){c=n(c);c.length||(removeScrollEvent(l),l=null)})},250);addScrollEvent(l)};getScript(\"\/\/www.googletagservices.com\/tag\/js\/gpt.js\",function(){b.googletag=b.googletag||{};b.googletag.cmd=b.googletag.cmd||[];c=r(getAdContainers());t();u();var a=969\u003Cb.innerWidth,f=769\u003Cb.innerWidth\u0026\u0026!a,d=770\u003Eb.innerWidth,e=debounce(function(){var c=b.innerWidth;970\u003C=c\u0026\u0026!a?(a=!0,d=f=!1,googletag.cmd.push(function(){googletag.pubads().refresh([g])})):\n770\u003Ec\u0026\u0026!d?(f=a=!1,d=!0,googletag.cmd.push(function(){googletag.pubads().refresh([g])})):970\u003Ec\u0026\u0026769\u003Cc\u0026\u0026!f\u0026\u0026(a=!1,f=!0,d=!1,googletag.cmd.push(function(){googletag.pubads().refresh([g])}))},250);addResizeEvent(e);document.addEventListener(\"refreshads\",function(){googletag.destroySlots();c=r(getAdContainers());t();u()},!1)})}}\n-1===window.location.hostname.indexOf(\"nature.com\")\u0026\u0026(\"complete\"===document.readyState||\"loaded\"===document.readyState||\"interactive\"===document.readyState?initAds(window,document.documentElement,window.Krux||{},{}):document.addEventListener(\"load\",function(){initAds(window,document.documentElement,window.Krux||{})}));document.addEventListener(\"permutiveready\",function(){initAds(window,document.documentElement,window.Krux||{})},!1);\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":16
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.location.pathname.match(\/^\\\/(nature_education|scitable|principles)(\\\/|$)\/)||(window.Krux||((Krux=function(){Krux.q.push(arguments)}).q=[]),function(){function c(a){a=\"kxmacmillan_\"+a;try{var b=window.localStorage}catch(e){b=null}return b?b[a]||\"\":navigator.cookieEnabled?(b=document.cookie.match(a+\"\\x3d([^;]*)\"))\u0026\u0026unescape(b[1])||\"\":\"\"}Krux.user=c(\"user\");Krux.segments=c(\"segs\")?c(\"segs\").split(\",\"):[];var a=[];Krux.user\u0026\u0026a.push(\"kuid\\x3d\"+Krux.user);for(var d=0;d\u003CKrux.segments.length;d++)a.push(\"ksg\\x3d\"+\nKrux.segments[d]);Krux.dfppKeyValues=a.length?a.join(\";\")+\";\":\"\"}());\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":19
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document,b=a.getElementsByTagName(\"script\")[0];s=a.createElement(\"script\");s.type=\"text\/javascript\";s.async=!0;s.src=\"\/\/optanon.blob.core.windows.net\/consent\/ce47efd6-7cab-4c50-806d-b2e4fc5cd34d.js\";b.parentNode.insertBefore(s,b)})();function OptanonWrapper(){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":23
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar filterMeta=function(b){for(var c=[],a=0;b[a];++a)b[a].name\u0026\u0026c.push(b[a]);return c},translateMeta=function(b){var c={\"WT.cg_n\":\"product_name\",\"WT.site_id\":\"site_id\",\"WT.site_id_name\":\"site_id_name\",\"WT.registrant_id\":\"user_id\"};return c[b]||b},getMeta=function(b){var c=filterMeta(document.getElementsByTagName(\"meta\")||[]),a=document.getElementsByTagName(\"body\")||[],f=function(){for(var a=c.length,d={},e;a--;)if(e=translateMeta(c[a].name))d[e]?(\"string\"===typeof d[e]\u0026\u0026(d[e]=[d[e]]),d[e].push(c[a].content)):\nd[e]=c[a].content||\"\";d.keywords\u0026\u0026(d.keywords=d.keywords.replace(\/,\/g,\";\"));b(d)};a.length?f():c.length\u0026\u0026f()};getMeta(function(b){window._pageMetaData=b});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":24
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Edocument.querySelector\u0026\u0026function(d){if(d){var g={publisherName:\"SpringerNature\",imprint:\"Nature\",orderBeanReset:\"true\"},h=function(a){for(var b={},e=\/([^\u0026=]+)=?([^\u0026]*)\/g,c=a.substring(1);a=e.exec(c);)b[decodeURIComponent(a[1].replace(\/\\+\/g,\" \"))]=decodeURIComponent(a[2].replace(\/\\+\/g,\" \"));return b}(d.search),k=function(a,b){var e=a.protocol+\"\/\/\"+a.hostname+a.pathname;var c=b;var d=[],f;for(f in c)c.hasOwnProperty(f)\u0026\u0026d.push(f+\"\\x3d\"+encodeURIComponent(c[f]));c=\"?\"+d.join(\"\\x26\");e+=c;a.setAttribute(\"href\",\ne)},b;for(b in g)g.hasOwnProperty(b)\u0026\u0026(h[b]=g[b]);k(d,h)}}(document.querySelector('a[href^\\x3d\"https:\/\/s100.copyright.com\"]'));\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":29
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var h=function(d,f,g,h){this.get=function(a){a+=\"\\x3d\";for(var b=document.cookie.split(\";\"),c=0,d=b.length;c\u003Cd;c++){for(var e=b[c];\" \"==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(a))return e.substring(a.length,e.length)}return null};this.set=function(a,b){var c=new Date;c.setTime(c.getTime()+6048E5);c=\"; expires\\x3d\"+c.toGMTString();document.cookie=a+\"\\x3d\"+b+c+\"; path\\x3d\/; \"};this.check=function(){var a=this.get(g);if(a)a=a.split(\":\");else if(100!=d)\"v\"==f\u0026\u0026(d=Math.random()\u003E=\nd\/100?0:100),a=[f,d,0],this.set(g,a.join(\":\"));else return!0;var b=a[1];if(100==b)return!0;switch(a[0]){case \"v\":return!1;case \"r\":return b=a[2]%Math.floor(100\/b),a[2]++,this.set(g,a.join(\":\")),!b}return!0};this.go=function(){if(this.check()){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.src=h+\"\\x26t\\x3d\"+(new Date).getTime();document.body\u0026\u0026document.body.appendChild(a)}};this.start=function(){var a=this;window.addEventListener?window.addEventListener(\"load\",function(){a.go()},\n!1):window.attachEvent\u0026\u0026window.attachEvent(\"onload\",function(){a.go()})}},f=document.createElement(\"div\");f.setAttribute(\"id\",\"SI_9LEO1QcbH9BEzFb\");document.body.appendChild(f);try{var k=new h(100,\"r\",\"QSI_S_SI_9LEO1QcbH9BEzFb\",\"https:\/\/zn7vxbjk81nhox2qf-springernature.siteintercept.qualtrics.com\/SIE\/?Q_SIID\\x3dSI_9LEO1QcbH9BEzFb\\x26Q_LOC\\x3d\"+encodeURIComponent(window.location.href));k.start()}catch(d){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":30
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar c_id=\"14617931\",_comscore=window._comscore=_comscore||[];_comscore.push({c1:\"2\",c2:c_id});(function(){var a=document,b=a.getElementsByTagName(\"script\")[0];a=a.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;var c=\"https:\"==document.location.protocol?\"https:\/\/sb\":\"http:\/\/b\";a.src=c+\".scorecardresearch.com\/beacon.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":31
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document,b=a.getElementsByTagName(\"script\")[0];a=a.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=",["escape",["macro",114],8,16],";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":34
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s=document.getElementsByTagName(\"script\")[0],p=document.createElement(\"script\");p.async=\"async\";p.src=\"\/\/scripts.webcontentassessor.com\/scripts\/93dabb8d80079a87fec7bb6f67b807fce90e1688f8957ad7ad152bfd58ea01c2\";s.parentNode.insertBefore(p,s);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":44
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"o1unr\");twq(\"track\",\"PageView\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":45
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E-1==document.location.href.search(\"appspot.com\")\u0026\u0026-1==document.referrer.search(\"appspot.com\")\u0026\u0026!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1229240860577415\");\nfbq(\"track\",\"PageView\");var segs=",["escape",["macro",75],8,16],";fbq(\"trackCustom\",\"SciRep_inMarket\",{t4fs93hlz:segs});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1229240860577415\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":46
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Edocument.querySelector\u0026\u0026function(d){if(d){var g={publisherName:\"SpringerNature\",imprint:\"Nature\",orderBeanReset:\"true\"},h=function(a){for(var b={},e=\/([^\u0026=]+)=?([^\u0026]*)\/g,c=a.substring(1);a=e.exec(c);)b[decodeURIComponent(a[1].replace(\/\\+\/g,\" \"))]=decodeURIComponent(a[2].replace(\/\\+\/g,\" \"));return b}(d.search),k=function(a,b){var e=a.protocol+\"\/\/\"+a.hostname+a.pathname;var c=b;var d=[],f;for(f in c)c.hasOwnProperty(f)\u0026\u0026d.push(f+\"\\x3d\"+encodeURIComponent(c[f]));c=\"?\"+d.join(\"\\x26\");e+=c;a.setAttribute(\"href\",\ne)},b;for(b in g)g.hasOwnProperty(b)\u0026\u0026(h[b]=g[b]);k(d,h)}}(document.querySelector('a[href^\\x3d\"https:\/\/s100.copyright.com\"]'));\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Ewindow.lightningjs||function(c){function g(b,d){d\u0026\u0026(d+=(\/\\?\/.test(d)?\"\\x26\":\"?\")+\"lv\\x3d1\");c[b]||function(){var k=window,h=document,l=b,g=h.location.protocol,n=\"load\",m=0;(function(){function b(){a.P(n);a.w=1;c[l](\"_load\")}c[l]=function(){function p(){p.id=e;return c[l].apply(p,arguments)}var e=++m;var b=this\u0026\u0026this!=k?this.id||0:0;(a.s=a.s||[]).push([e,b,arguments]);p.then=function(b,c,h){var d=a.fh[e]=a.fh[e]||[],l=a.eh[e]=a.eh[e]||[],f=a.ph[e]=a.ph[e]||[];b\u0026\u0026d.push(b);c\u0026\u0026l.push(c);h\u0026\u0026f.push(h);\nreturn p};return p};var a=c[l]._={};a.fh={};a.eh={};a.ph={};a.l=d?d.replace(\/^\\\/\\\/\/,(\"https:\"==g?g:\"http:\")+\"\/\/\"):d;a.p={0:+new Date};a.P=function(b){a.p[b]=new Date-a.p[0]};a.w\u0026\u0026b();k.addEventListener?k.addEventListener(n,b,!1):k.attachEvent(\"on\"+n,b);var t=function(){function b(){return[\"\\x3chead\\x3e\\x3c\/head\\x3e\\x3c\",e,' onload\\x3d\"var d\\x3d',q,\";d.getElementsByTagName('head')[0].\",d,\"(d.\",g,\"('script')).\",k,\"\\x3d'\",a.l,\"'\\\"\\x3e\\x3c\/\",e,\"\\x3e\"].join(\"\")}var e=\"body\",c=h[e];if(!c)return setTimeout(t,\n100);a.P(1);var d=\"appendChild\",g=\"createElement\",k=\"src\",m=h[g](\"div\"),n=m[d](h[g](\"div\")),f=h[g](\"iframe\"),q=\"document\";m.style.display=\"none\";c.insertBefore(m,c.firstChild).id=r+\"-\"+l;f.frameBorder=\"0\";f.id=r+\"-frame-\"+l;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(f[k]=\"javascript:false\");f.allowTransparency=\"true\";n[d](f);try{f.contentWindow[q].open()}catch(w){a.domain=h.domain;var u=\"javascript:var d\\x3d\"+q+\".open();d.domain\\x3d'\"+h.domain+\"';\";f[k]=u+\"void(0);\"}try{var v=f.contentWindow[q];v.write(b());\nv.close()}catch(w){f[k]=u+'d.write(\"'+b().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}a.P(2)};a.l\u0026\u0026setTimeout(t,0)})()}();c[b].lv=\"1\";return c[b]}var r=\"lightningjs\",m=window[r]=g(r);m.require=g;m.modules=c}({});window.usabilla_live=lightningjs.require(\"usabilla_live\",\"\/\/w.usabilla.com\/c9624a2fb834.js\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":59
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",74,2]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Ewindow.lightningjs||function(c){function g(b,d){d\u0026\u0026(d+=(\/\\?\/.test(d)?\"\\x26\":\"?\")+\"lv\\x3d1\");c[b]||function(){var k=window,h=document,l=b,g=h.location.protocol,n=\"load\",m=0;(function(){function b(){a.P(n);a.w=1;c[l](\"_load\")}c[l]=function(){function p(){p.id=e;return c[l].apply(p,arguments)}var e=++m;var b=this\u0026\u0026this!=k?this.id||0:0;(a.s=a.s||[]).push([e,b,arguments]);p.then=function(b,c,h){var d=a.fh[e]=a.fh[e]||[],l=a.eh[e]=a.eh[e]||[],f=a.ph[e]=a.ph[e]||[];b\u0026\u0026d.push(b);c\u0026\u0026l.push(c);h\u0026\u0026f.push(h);\nreturn p};return p};var a=c[l]._={};a.fh={};a.eh={};a.ph={};a.l=d?d.replace(\/^\\\/\\\/\/,(\"https:\"==g?g:\"http:\")+\"\/\/\"):d;a.p={0:+new Date};a.P=function(b){a.p[b]=new Date-a.p[0]};a.w\u0026\u0026b();k.addEventListener?k.addEventListener(n,b,!1):k.attachEvent(\"on\"+n,b);var t=function(){function b(){return[\"\\x3chead\\x3e\\x3c\/head\\x3e\\x3c\",e,' onload\\x3d\"var d\\x3d',q,\";d.getElementsByTagName('head')[0].\",d,\"(d.\",g,\"('script')).\",k,\"\\x3d'\",a.l,\"'\\\"\\x3e\\x3c\/\",e,\"\\x3e\"].join(\"\")}var e=\"body\",c=h[e];if(!c)return setTimeout(t,\n100);a.P(1);var d=\"appendChild\",g=\"createElement\",k=\"src\",m=h[g](\"div\"),n=m[d](h[g](\"div\")),f=h[g](\"iframe\"),q=\"document\";m.style.display=\"none\";c.insertBefore(m,c.firstChild).id=r+\"-\"+l;f.frameBorder=\"0\";f.id=r+\"-frame-\"+l;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(f[k]=\"javascript:false\");f.allowTransparency=\"true\";n[d](f);try{f.contentWindow[q].open()}catch(w){a.domain=h.domain;var u=\"javascript:var d\\x3d\"+q+\".open();d.domain\\x3d'\"+h.domain+\"';\";f[k]=u+\"void(0);\"}try{var v=f.contentWindow[q];v.write(b());\nv.close()}catch(w){f[k]=u+'d.write(\"'+b().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}a.P(2)};a.l\u0026\u0026setTimeout(t,0)})()}();c[b].lv=\"1\";return c[b]}var r=\"lightningjs\",m=window[r]=g(r);m.require=g;m.modules=c}({});window.usabilla_live=lightningjs.require(\"usabilla_live\",\"\/\/w.usabilla.com\/b91e4719b0f6.js\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":61
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",74,2]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Ewindow.lightningjs||function(c){function g(b,d){d\u0026\u0026(d+=(\/\\?\/.test(d)?\"\\x26\":\"?\")+\"lv\\x3d1\");c[b]||function(){var k=window,h=document,l=b,g=h.location.protocol,n=\"load\",m=0;(function(){function b(){a.P(n);a.w=1;c[l](\"_load\")}c[l]=function(){function p(){p.id=e;return c[l].apply(p,arguments)}var e=++m;var b=this\u0026\u0026this!=k?this.id||0:0;(a.s=a.s||[]).push([e,b,arguments]);p.then=function(b,c,h){var d=a.fh[e]=a.fh[e]||[],l=a.eh[e]=a.eh[e]||[],f=a.ph[e]=a.ph[e]||[];b\u0026\u0026d.push(b);c\u0026\u0026l.push(c);h\u0026\u0026f.push(h);\nreturn p};return p};var a=c[l]._={};a.fh={};a.eh={};a.ph={};a.l=d?d.replace(\/^\\\/\\\/\/,(\"https:\"==g?g:\"http:\")+\"\/\/\"):d;a.p={0:+new Date};a.P=function(b){a.p[b]=new Date-a.p[0]};a.w\u0026\u0026b();k.addEventListener?k.addEventListener(n,b,!1):k.attachEvent(\"on\"+n,b);var t=function(){function b(){return[\"\\x3chead\\x3e\\x3c\/head\\x3e\\x3c\",e,' onload\\x3d\"var d\\x3d',q,\";d.getElementsByTagName('head')[0].\",d,\"(d.\",g,\"('script')).\",k,\"\\x3d'\",a.l,\"'\\\"\\x3e\\x3c\/\",e,\"\\x3e\"].join(\"\")}var e=\"body\",c=h[e];if(!c)return setTimeout(t,\n100);a.P(1);var d=\"appendChild\",g=\"createElement\",k=\"src\",m=h[g](\"div\"),n=m[d](h[g](\"div\")),f=h[g](\"iframe\"),q=\"document\";m.style.display=\"none\";c.insertBefore(m,c.firstChild).id=r+\"-\"+l;f.frameBorder=\"0\";f.id=r+\"-frame-\"+l;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(f[k]=\"javascript:false\");f.allowTransparency=\"true\";n[d](f);try{f.contentWindow[q].open()}catch(w){a.domain=h.domain;var u=\"javascript:var d\\x3d\"+q+\".open();d.domain\\x3d'\"+h.domain+\"';\";f[k]=u+\"void(0);\"}try{var v=f.contentWindow[q];v.write(b());\nv.close()}catch(w){f[k]=u+'d.write(\"'+b().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}a.P(2)};a.l\u0026\u0026setTimeout(t,0)})()}();c[b].lv=\"1\";return c[b]}var r=\"lightningjs\",m=window[r]=g(r);m.require=g;m.modules=c}({});window.usabilla_live=lightningjs.require(\"usabilla_live\",\"\/\/w.usabilla.com\/4e21a51350b0.js\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":65
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",78,0]],
      "teardown_tags":["list",["tag",75,2]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003Ewindow.usabilla||function(){var a=window,d=a.document,b={},g=d.createElement(\"div\"),h=!1;a=a.usabilla=function(){(b.a=b.a||[]).push(arguments)};a._=b;b.ids={};g.style.display=\"none\";(function(){if(!d.body)return setTimeout(arguments.callee,100);d.body.insertBefore(g,d.body.firstChild).id=\"usabilla\";h=!0})();a.load=function(a,f,k){if(!b.ids[f]){var e=b.ids={};e.url=\"\/\/\"+a+\"\/\"+f+\".js?s1\";e.config=k;setTimeout(function(){if(!h)return setTimeout(arguments.callee,100);var c=d.createElement(\"iframe\");c.id=\n\"usabilla-\"+f;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(c.src=\"javascript:false\");g.appendChild(c);try{c.contentWindow.document.open()}catch(l){e.domain=d.domain;var a=\"javascript:var d\\x3ddocument.open();d.domain\\x3d'\"+e.domain+\"';\";c.src=a+\"void(0);\"}try{var b=c.contentWindow.document;b.write([\"\\x3c!DOCTYPE html\\x3e\\x3chtml\\x3e\\x3chead\\x3e\\x3c\/head\\x3e\\x3cbody onload\\x3d\\\"var d \\x3d document;d.getElementsByTagName('head')[0].appendChild(d.createElement('script')).src\\x3d'\",e.url,\"'\\\"\\x3e\\x3c\/body\\x3e\\x3c\/html\\x3e\"].join(\"\"));\nb.close()}catch(l){c.src=a+'d.write(\"'+loaderHtml().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}c.contentWindow.config=k;c.contentWindow.SCRIPT_ID=f},0)}}}();window.usabilla.load(\"w.usabilla.com\",\"6fa646ed3ab3\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":71
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar mainArticleBodyContainer=document.querySelector(\"#main-article-body\");mainArticleBodyContainer\u0026\u0026mainArticleBodyContainer.classList.remove(\"js-hide\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":75
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(a,b,c,d,e){if(!b)for(b=b||{},window.permutive=b,b.q=[],b.config=e||{},b.config.projectId=c,b.config.apiKey=d,b.config.environment=b.config.environment||\"production\",a=\"addon identify track trigger query segment segments ready on once user consent\".split(\" \"),c=0;c\u003Ca.length;c++)d=a[c],b[d]=function(a){return function(){var c=Array.prototype.slice.call(arguments,0);b.q.push({functionName:a,arguments:c})}}(d)}(document,window.permutive,\"2e4b93d1-a8ae-4a89-8885-6109135ac0de\",\"7509d50f-8950-4699-a535-f9942eea50bf\",\n{consentRequired:!0});window.googletag=window.googletag||{};window.googletag.cmd=window.googletag.cmd||[];window.googletag.cmd.push(function(){if(0===window.googletag.pubads().getTargeting(\"permutive\").length){var a=window.localStorage.getItem(\"_pdfps\");window.googletag.pubads().setTargeting(\"permutive\",a?JSON.parse(a):[])}});permutive.readyWithTimeout=function(a,b,c){var d=!1,e=function(){d||(a(),d=!0)};(c=c||1\/0)!==1\/0\u0026\u0026window.setTimeout(e,c);permutive.ready(e,b)};\nvar NOT_SET=\"(not set)\",identity=function(a){return a},clean=function(a,b){return(b||identity)(a===NOT_SET||!a\u0026\u0026\"number\"!==typeof a?null:a)},bool=function(a){return a===NOT_SET?!1:!!a},lower=function(a){return\"string\"===typeof a?a.toLowerCase():a},strip=function(a){var b=0,c=0,d;for(d in a)++b,a.hasOwnProperty(d)\u0026\u0026null===a[d]\u0026\u0026(++c,delete a[d]);return b===c?null:a},pathSegments=function(){for(var a={},b=window.location.pathname.slice(1).split(\"\/\"),c=0,d=b.length;c\u003Cd;++c)2\u003Ec?a[\"level\"+(c+1)]=b[c]:\na.level2+=\"\/\"+b[c];return a},clientId=function(){return window.ga\u0026\u0026window.ga.getAll?window.ga.getAll()[0].get(\"clientId\"):null},gaClientId=clientId(),content=strip({article:strip({doi:clean(",["escape",["macro",18],8,16],"),title:clean(",["escape",["macro",55],8,16],"),type:clean(",["escape",["macro",2],8,16],",lower),keywords:clean(",["escape",["macro",49],8,16],",function(a){a=(a||\"\").split(\";\");return 0===a.length||1===a.length\u0026\u0026\"\"===a[0]?null:a})}),category:strip({contentType:clean(",["escape",["macro",7],8,16],",lower)}),path:pathSegments(),backHalf:bool(",["escape",["macro",120],8,16],")}),\npage=strip({pageType:clean(",["escape",["macro",2],8,16],",lower)}),journal=strip({title:clean(",["escape",["macro",15],8,16],",lower)}),user=strip({bpid:clean(",["escape",["macro",63],8,16],"),accessType:clean(",["escape",["macro",83],8,16],",lower),authorizationStatus:bool(",["escape",["macro",30],8,16],")}),model={page:strip({content:content,page:page,journal:journal,user:user})},consent=Bootstrapper.npg.utils.Consent;consent.allow(consent.TARGETING)?permutive.consent({opt_in:!0,token:\"CONSENT_CAPTURED\"}):permutive.consent({opt_in:!1});\ngaClientId\u0026\u0026permutive.identify([{id:gaClientId,tag:\"client-id\"}]);permutive.addon(\"web\",model);permutive.readyWithTimeout(function(){document.dispatchEvent(new CustomEvent(\"permutiveready\"))},\"realtime\",1500);\u003C\/script\u003E\n\u003Cscript async data-gtmsrc=\"https:\/\/cdn.permutive.com\/2e4b93d1-a8ae-4a89-8885-6109135ac0de-web.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":307
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b){var a=b.createElement(\"script\");a.setAttribute(\"async\",\"async\");a.src=\"https:\/\/scholar.google.com\/scholar_js\/casa.js\";b.head.appendChild(a)})(document);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":317
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",77,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Edocument.addEventListener(\"accessdetailsloaded\",function(a){a=a.detail;var b={event:\"update-access-details\"};if(a){var c=a.institutional_business_partner_ids\u0026\u0026a.institutional_business_partner_ids.join?a.institutional_business_partner_ids.join(\";\"):\"\",d=a.resolved_by\u0026\u0026a.resolved_by.join?a.resolved_by.join(\";\"):\"\";b.user={};b.user.profile={};b.user.profile.profileInfo={resolvedBy:d||null,bpid:c||null};b.session={};b.session.authentication={};b.session.authentication.token=a.token||null;b.session.authentication.legacy=\n{}}window.dataLayer.push(b)},!1);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":328
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.querySelector(\".optanon-alert-box-wrapper .banner-policy-link\");if(a){var b=a.cloneNode();b.textContent=a.textContent;a.parentNode.replaceChild(b,a)}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":333
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar getClientId=function(){return window.ga\u0026\u0026window.ga.getAll\u0026\u0026window.ga.getAll().length?window.ga.getAll()[0].get(\"clientId\"):null},clientId=getClientId();if(clientId){var dlUpdate={event:\"ga-client-id-pushed-to-datalayer\",gaClientId:clientId};window.dataLayer.push(dlUpdate)};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":37
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EBootstrapper=window.Bootstrapper||{};Bootstrapper.npg=Bootstrapper.npg||{};Bootstrapper.npg.utils=Bootstrapper.npg.utils||{};Bootstrapper.npg.utils.Consent=function(){var d=unescape(Bootstrapper.npg.utils.Request.cookie(\"OptanonConsent\")||\"\"),b=(\/groups=([^\u0026]+)\/.exec(d)||[\"\",\"\"])[1].split(\",\");return{STRICTLY_NECESSARY:1,PERFORMANCE:2,FUNCTIONAL:3,TARGETING:4,allow:function(c){if(c===this.STRICTLY_NECESSARY)return!0;for(var a=0;b[a];++a)if(b[a]===c+\":0\")return!1;return!0}}}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":13
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/javascript\"\u003Ewindow.usabilla_live(\"data\",{custom:{kruxUser:",["escape",["macro",74],8,16],",kruxSegment:",["escape",["macro",75],8,16],",journalTitle:",["escape",["macro",17],8,16],",pageType:",["escape",["macro",4],8,16],",template:",["escape",["macro",57],8,16],",contentType:",["escape",["macro",122],8,16],",doi:",["escape",["macro",18],8,16],",abTestValue:",["escape",["macro",68],8,16],",authorization:",["escape",["macro",123],8,16],",bpid:",["escape",["macro",64],8,16],",primaryArticleType:",["escape",["macro",48],8,16],",referrer:",["escape",["macro",124],8,16],",openAcces:",["escape",["macro",125],8,16],",GAclientId:",["escape",["macro",126],8,16],",usabillaSurvey:",["escape",["macro",127],8,16],"}});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":62
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar widgetUsabillaSelector=document.getElementsByClassName(\"gtm-usabilla-in-page\")[0];\nwidgetUsabillaSelector\u0026\u0026(widgetUsabillaSelector.setAttribute(\"ub-in-page-kruxUser\",",["escape",["macro",74],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-kruxSegment\",",["escape",["macro",75],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-journalTitle\",",["escape",["macro",17],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-pageType\",",["escape",["macro",4],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-template\",",["escape",["macro",57],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-contentType\",",["escape",["macro",122],8,16],"),\nwidgetUsabillaSelector.setAttribute(\"ub-in-page-doi\",",["escape",["macro",18],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-abTestValue\",",["escape",["macro",68],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-authorization\",",["escape",["macro",123],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-bpid\",",["escape",["macro",64],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-primaryArticleType\",",["escape",["macro",48],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-referrer\",",["escape",["macro",124],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-openAcces\",\n",["escape",["macro",125],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-GAclientId\",",["escape",["macro",126],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-usabillaSurvey\",",["escape",["macro",127],8,16],"));",["escape",["macro",116],8,16],"\u0026\u0026window.usabilla(\"setEventCallback\",function(b,a,c,d,e){\"In-Page:Success\"===a\u0026\u0026",["escape",["macro",128],8,16],"()});",["escape",["macro",118],8,16],"\u0026\u0026",["escape",["macro",129],8,16],"();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":72
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",72,2]],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(win,doc,undefined){var isArray=",["escape",["macro",66],8,16],";var isObject=",["escape",["macro",130],8,16],";var map=",["escape",["macro",67],8,16],";var closestByAttribute=",["escape",["macro",132],8,16],";var closest=",["escape",["macro",131],8,16],";var enforceDataType=",["escape",["macro",133],8,16],";var normaliseAnd=",["escape",["macro",5],8,16],";var normaliseWhitespace=",["escape",["macro",6],8,16],";var formatDate=",["escape",["macro",20],8,16],";var createEventPayload=",["escape",["macro",134],8,16],";var createEcommercePromotionEvent=",["escape",["macro",136],8,16],";var createEcommerceProductEvent=\n",["escape",["macro",138],8,16],";var productAtIndex=",["escape",["macro",139],8,16],";var sendEvent=",["escape",["macro",140],8,16],";var eventHandler=",["escape",["macro",141],8,16],";(function(products){if(products\u0026\u0026products.length){for(var i=0;products[i];++i){var product=productAtIndex(products,i);product.list=\"Search Results\";win.ga(\"ec:addImpression\",product)}sendEvent({action:\"impression\",category:\"catalog\",nonInteraction:true})}})(",["escape",["macro",137],8,16],");var setupTracking=function(selector,eventName,handlerName){var elements=document.querySelectorAll(selector);\nif(!elements.length)return;Array.prototype.slice.call(elements).forEach(function(element){element.addEventListener(eventName,function(e){eventHandler(e.target,handlerName||eventName)})})};setupTracking('[data-track\\x3d\"click\"]',\"click\");setupTracking('[data-track\\x3d\"change\"]',\"change\");setupTracking('[data-track\\x3d\"download\"]',\"click\",\"download\");setupTracking('form[data-track\\x3d\"submit\"]',\"submit\");if(window.IntersectionObserver){var inViewElements=document.querySelectorAll('[data-track\\x3d\"in-view\"]');\nif(!inViewElements.length)return;var handleIntersect=function(entries,observer){entries.forEach(function(entry){if(entry.intersectionRatio\u003E.25){eventHandler(entry.target,\"in-view\");observer.unobserve(entry.target)}})};var observer=new IntersectionObserver(handleIntersect,{root:null,rootMargin:\"0px\",threshold:[0,.25,.75,1]});Array.prototype.slice.call(inViewElements).forEach(function(element){observer.observe(element)})}var clickPromotions=document.querySelectorAll('[data-track\\x3d\"click-promotion\"]');\nif(clickPromotions.length)Array.prototype.slice.call(clickPromotions).forEach(function(promotion){promotion.addEventListener(\"click\",function(e){var target=closestByAttribute(e.target,\"data-track\",\"click-promotion\");var payload=null;if(target){payload=createEcommercePromotionEvent(target);if(payload){win.ga(\"ec:addPromo\",payload);win.ga(\"ec:setAction\",\"promo_click\");sendEvent({category:\"Internal Promotions\",action:\"click\",label:payload.name})}}})});var clickProducts=document.querySelectorAll('[data-track\\x3d\"click-product\"]');\nif(clickProducts.length)Array.prototype.slice.call(clickProducts).forEach(function(product){product.addEventListener(\"click\",function(e){var target=closestByAttribute(e.target,\"data-track\",\"click-product\");var payload=null;if(target){payload=createEcommerceProductEvent(target);if(payload){win.ga(\"ec:addProduct\",payload);win.ga(\"ec:setAction\",\"click\",{list:\"Search Results\"});sendEvent({category:\"UX\",action:\"click\",label:\"Results\",value:payload.name})}}})});var sciHubLinks=document.querySelectorAll('a[href*\\x3d\"sci-hub\"],a[href*\\x3d\"dx.doi.org\"]');\nif(sciHubLinks.length)Array.prototype.slice.call(sciHubLinks).forEach(function(link){link.addEventListener(\"click\",function(){sendEvent({action:\"Click Event\",category:\"External Link\",label:this.href.indexOf(\"sci-hub\")!==-1?\"sci-hub\":\"dx.doi.org\"})})})})(window,document);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":12
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){if(\"function\"===typeof window.CustomEvent)return!1;var b=function(b,c){c=c||{};var d=document.createEvent(\"CustomEvent\");d.initCustomEvent(b,c.bubbles||!1,c.cancelable||!1,c.detail||a);return d};b.prototype=window.Event.prototype;window.CustomEvent=b})();var parse=function(a,b){try{return 200===a?JSON.parse(b):null}catch(e){return null}},dispatch=function(a){a=new CustomEvent(\"accessdetailsloaded\",{detail:a});document.dispatchEvent(a)};\nif(-1!==window.location.hostname.indexOf(\".nature.com\")){var transport=new XMLHttpRequest;transport.open(\"GET\",\"https:\/\/idp.nature.com\/exposed-details\",!0);transport.withCredentials=!0;transport.onreadystatechange=function(){4===transport.readyState\u0026\u0026dispatch(parse(transport.status,transport.responseText))};transport.send()}else dispatch(null);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":329
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar usabillaId=",["escape",["macro",116],8,16],"?",["escape",["macro",142],8,16],":",["escape",["macro",143],8,16],",containerId=",["escape",["macro",116],8,16],"?\"gtm-usabilla-survey-widget\":\"gtm-usabilla-paywall-widget\",container=document.createElement(\"div\"),parentContainerSelector=\"#gtm-usabilla-container\",parentContainer=document.querySelector(parentContainerSelector);\nparentContainer\u0026\u0026(container.setAttribute(\"id\",containerId),container.setAttribute(\"class\",\"gtm-usabilla-in-page\"),",["escape",["macro",118],8,16],"\u0026\u0026parentContainer.classList.add(\"js-hide\"),container.setAttribute(\"ub-in-page\",usabillaId),parentContainer.insertBefore(container,parentContainer.firstChild));\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":74
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",86],
      "arg1":"^((test-)?www\\.nature\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"^(\/ecommerce\/subscribe\\.action)$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",88],
      "arg1":"nature"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"^()$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",86],
      "arg1":"^(idp|transfer|press)\\..*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"^\\\/(login|my-account|immersive|public\\\/n\\\/payment).*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",90],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",86],
      "arg1":"staging-www.nature.com"
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"^\\\/news\\\/",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",86],
      "arg1":"test-www.nature.com"
    },{
      "function":"_eq",
      "arg0":["macro",86],
      "arg1":"www.nature.com"
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"^\\\/articles\/n-",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"^(\/nature\/journal\/v554\/n7690\/index\\.html\/?)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",86],
      "arg1":"^(www\\.nature\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",86],
      "arg1":"^(local\\.nature\\.com(:[0-9]+)?)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",86],
      "arg1":"^(local-www\\.nature\\.com(:\\d+)?)$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"nature-js-bundle-loaded"
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"^\\\/(login|my-account|public\\\/n\\\/payment).*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",86],
      "arg1":"(idp|transfer|press)\\..*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"bav"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"update-access-details"
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"^\/briefing.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",91],
      "arg1":"false"
    },{
      "function":"_cn",
      "arg0":["macro",87],
      "arg1":"\/collections\/hgnwmmsqfr\/events"
    },{
      "function":"_re",
      "arg0":["macro",92],
      "arg1":".*aacr.*|.*cell\\-symposia.*|.*csh\\asia.*|.*meetings.*|.*ebi.*training.*|.*embl.*training.*|.*imb.*confer.*|.*asconacir.*|.*ature.*natureconfer.*|.*nyas.*events.*|.*ellcomegenomecam.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",93],
      "arg1":"(^$|((^|,)10482319_77($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"interactive-event"
    },{
      "function":"_eq",
      "arg0":["macro",100],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",102],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",103],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",93],
      "arg1":"(^$|((^|,)10482319_145($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",105],
      "arg1":"[datatracking=\"data-track=\\\"click\\\" data-track-action=\\\"learn-subscription\\\" data-track-label=\\\"link\\\"\"]"
    },{
      "function":"_re",
      "arg0":["macro",93],
      "arg1":"(^$|((^|,)10482319_150($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",105],
      "arg1":"[datatracking=\"data-test=\\\"subscribe-prompt-log-in\\\" data-track=\\\"click\\\" data-track-action=\\\"login\\\" data-track-label=\\\"link\\\"\"]"
    },{
      "function":"_re",
      "arg0":["macro",93],
      "arg1":"(^$|((^|,)10482319_151($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",105],
      "arg1":"[datatracking=\"data-track=\\\"click\\\" data-track-action=\\\"athens\\\" data-track-label=\\\"link\\\"\"]"
    },{
      "function":"_re",
      "arg0":["macro",93],
      "arg1":"(^$|((^|,)10482319_152($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",105],
      "arg1":"[datatracking=\"data-track=\\\"click\\\" data-track-action=\\\"shibboleth\\\" data-track-label=\\\"link\\\"\"]"
    },{
      "function":"_re",
      "arg0":["macro",93],
      "arg1":"(^$|((^|,)10482319_153($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",107],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",108],
      "arg1":"local-www"
    },{
      "function":"_eq",
      "arg0":["macro",87],
      "arg1":"\/srep"
    },{
      "function":"_eq",
      "arg0":["macro",87],
      "arg1":"\/srep\/"
    },{
      "function":"_cn",
      "arg0":["macro",87],
      "arg1":"\/articles"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",93],
      "arg1":"(^$|((^|,)10482319_193($|,)))"
    },{
      "function":"_sw",
      "arg0":["macro",87],
      "arg1":"\/srep"
    },{
      "function":"_re",
      "arg0":["macro",93],
      "arg1":"(^$|((^|,)10482319_294($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",93],
      "arg1":"(^$|((^|,)10482319_290($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",93],
      "arg1":"(^$|((^|,)10482319_289($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",86],
      "arg1":"natureindex.com"
    },{
      "function":"_eq",
      "arg0":["macro",110],
      "arg1":"author link - publication"
    },{
      "function":"_re",
      "arg0":["macro",93],
      "arg1":"(^$|((^|,)10482319_312($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",110],
      "arg1":"author link - pubmed"
    },{
      "function":"_re",
      "arg0":["macro",93],
      "arg1":"(^$|((^|,)10482319_313($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",110],
      "arg1":"author link - scholar"
    },{
      "function":"_re",
      "arg0":["macro",93],
      "arg1":"(^$|((^|,)10482319_316($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"mosaic"
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"^(\/naturejobs\/?)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",86],
      "arg1":"guide.labanimal.com"
    },{
      "function":"_re",
      "arg0":["macro",86],
      "arg1":"^(.*?\\.natureasiapacific\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",86],
      "arg1":"^(.*?\\.natureindex\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",86],
      "arg1":"^((test-|staging-)?www\\.palgrave-journals\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",86],
      "arg1":"(?i)blogs.nature.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",86],
      "arg1":"^(www\\.labanimal\\.com)$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",86],
      "arg1":"staging-guide.labanimal.com"
    },{
      "function":"_eq",
      "arg0":["macro",86],
      "arg1":"test-guide.labanimal.com"
    },{
      "function":"_eq",
      "arg0":["macro",86],
      "arg1":"press.nature.com"
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"^(\/nature\/journal\/.+?\/(?:(full)|(abs))\/.+?\\.html)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"^(\/news\/.*?1\\.[0-9]+)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"^(\/collections\/?)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"^(https?)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",86],
      "arg1":"^((?!.*(press)).*\\.nature\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"\"^\/(nature_education|scitable|principles|search|subjects)(\/|$)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",113],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"^\/news\/[0-9]{4}\/[0-9]+\/full\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",86],
      "arg1":"test-www.nature.com|qa-snpaas-www.nature.com"
    },{
      "function":"_re",
      "arg0":["macro",80],
      "arg1":"(idp|transfer|press)\\..*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"magazine mosaic"
    },{
      "function":"_eq",
      "arg0":["macro",116],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",87],
      "arg1":"\/articles\/"
    },{
      "function":"_eq",
      "arg0":["macro",117],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",118],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",119],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"^\\\/(login|my-account|public\\\/n\\\/payment).*"
    },{
      "function":"_re",
      "arg0":["macro",86],
      "arg1":"(idp|transfer|press)\\..*"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"ga-client-id-pushed-to-datalayer"
    },{
      "function":"_eq",
      "arg0":["macro",121],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"0"
    }],
  "rules":[
    [["if",0,1],["add",4,71]],
    [["if",2,3,4,5,6],["add",5]],
    [["if",7],["add",6,12,13,14,54,0,70,37,39,40,41,42,44,45,47,48,49]],
    [["if",6],["unless",8,9],["add",7]],
    [["if",6,12,13],["add",8]],
    [["if",6,13,14],["add",8]],
    [["if",6,13,15],["add",8]],
    [["if",6,15,16],["add",8]],
    [["if",6,17,18],["add",8]],
    [["if",7,19],["add",9,51]],
    [["if",7,20],["add",9,51]],
    [["if",6,15],["add",10,57]],
    [["if",21],["add",11]],
    [["if",6],["unless",22,23,24],["add",15]],
    [["if",25],["add",16]],
    [["if",6,26],["add",16]],
    [["if",28,29,30,31],["add",17]],
    [["if",1],["add",18,60,61,43,46]],
    [["if",32],["add",19]],
    [["if",6,33],["add",20]],
    [["if",6,34],["add",21]],
    [["if",6,35],["add",22]],
    [["if",36,37],["add",23]],
    [["if",30,38,39],["add",24]],
    [["if",30,40,41],["add",25]],
    [["if",30,42,43],["add",26]],
    [["if",30,44,45],["add",27]],
    [["if",11,46],["add",28]],
    [["if",7,47,48],["add",3]],
    [["if",7,49],["add",3]],
    [["if",50,51,52],["add",29]],
    [["if",51,53,54],["add",29]],
    [["if",6],["add",30]],
    [["if",55,56],["add",31]],
    [["if",55,57],["add",32]],
    [["if",7],["unless",22,23],["add",33,1,52,59]],
    [["if",30,59,60],["add",34]],
    [["if",30,61,62],["add",35]],
    [["if",30,63,64],["add",36]],
    [["if",7,66],["unless",65],["add",38]],
    [["if",6,18,67],["add",50]],
    [["if",7,68],["add",51]],
    [["if",7,69],["add",51]],
    [["if",7,70],["add",51]],
    [["if",7,71],["add",51]],
    [["if",7,72],["add",51]],
    [["if",7,73],["add",51]],
    [["if",7,74],["add",51]],
    [["if",7,12],["add",51]],
    [["if",7,75],["add",51]],
    [["if",7,14],["add",51]],
    [["if",7,15],["add",51]],
    [["if",6,70],["add",2]],
    [["if",6,76],["add",53]],
    [["if",6,18,77],["add",55]],
    [["if",6,18,78],["add",55]],
    [["if",6,18,79,80],["add",56]],
    [["if",6,72],["add",57]],
    [["if",6,81],["unless",82],["add",58]],
    [["if",6,77],["add",62]],
    [["if",6,78],["add",62]],
    [["if",6,84],["add",62]],
    [["if",6,85],["unless",22,86],["add",63]],
    [["if",1],["unless",22,23,24],["add",64]],
    [["if",6,24],["add",65]],
    [["if",6,87,88,89,90],["add",66]],
    [["if",6,87,89,91,92],["add",66]],
    [["if",6,10,87,89,91,92],["add",67]],
    [["if",95],["unless",58,93,94],["add",68]],
    [["if",7,66,96,97],["unless",65],["add",69]],
    [["if",10,11],["block",7,10,15,20,21,22,30,52,2,57,60,61,63,64,65,66]],
    [["if",11,27],["block",16,23,29]],
    [["if",7,58],["block",33,1]],
    [["if",11,83],["block",58]]]
},
"runtime":[[50,"__cegg",[46,"a"],[52,"b",["require","injectScript"]],[52,"c",["require","getTimestamp"]],[52,"d",["require","makeInteger"]],[52,"e",["require","setInWindow"]],[52,"f",[17,[15,"a"],"usersNumericId"]],[22,[28,[15,"f"]],[46,[2,[15,"a"],"gtmOnFailure",[7]],[36]]],[22,[17,[15,"a"],"snapshotName"],[46,["e","CE_SNAPSHOT_NAME",[17,[15,"a"],"snapshotName"],true]]],[41,"g"],[3,"g",[2,[15,"f"],"toString",[7]]],[42,[23,[17,[15,"g"],"length"],8],[46],false,[46,[3,"g",[0,"0",[15,"g"]]]]],[52,"h",[2,[15,"g"],"match",[7,"(\\d+)(\\d{4})$"]]],[22,[28,[15,"h"]],[46,[2,[15,"a"],"gtmOnFailure",[7]],[36]]],[52,"i",[0,[0,[0,[0,[0,[0,"https://script.crazyegg.com/pages/scripts/",[16,[15,"h"],1]],"/"],[16,[15,"h"],2]],".js"],"?"],["d",[10,["c"],3600000]]]],["b",[15,"i"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],[2,[15,"f"],"toString",[7]]]],[50,"__crto",[46,"a"],[52,"b",["require","createQueue"]],[52,"c",["require","injectScript"]],[52,"d","https://static.criteo.net/js/ld/ld.js"],[52,"e",["b","criteo_q"]],[41,"f"],[3,"f",[8,"event","viewHome"]],[38,[17,[15,"a"],"tagType"],[46,"LISTING_TAG","PRODUCT_TAG","BASKET_TAG","TRANSACTION_TAG"],[46,[5,[46,[3,"f",[8,"event","viewList","item",[17,[15,"a"],"listingID"]]],[4]]],[5,[46,[3,"f",[8,"event","viewItem","item",[17,[15,"a"],"productID"]]],[4]]],[5,[46,[3,"f",[8,"event","viewBasket","item",[17,[15,"a"],"basketArray"]]],[4]]],[5,[46,[3,"f",[8,"event","trackTransaction","id",[30,[17,[15,"a"],"TransactionID"],""],"item",[17,[15,"a"],"TransactionArray"]]],[4]]]]],["e",[8,"event","setAccount","account",[17,[15,"a"],"accountId"]],[8,"event","setHashedEmail","email",[30,[17,[15,"a"],"hashedEmail"],""]],[8,"event","setSiteType","type",[30,[17,[15,"a"],"siteType"],"d"]],[15,"f"]],["c",[15,"d"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],"criteoStatic"]]]
,"permissions":{"__cegg":{"access_globals":{"keys":[{"key":"CE_SNAPSHOT_NAME","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/script.crazyegg.com\/pages\/scripts\/*"]}},"__crto":{"access_globals":{"keys":[{"key":"criteo_q","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/static.criteo.net\/js\/ld\/ld.js"]}}}

,"security_groups":{
"nonGoogleScripts":["__cegg","__crto"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ia={Uf:!0},ja={};try{ja.__proto__=ia;ha=ja.Uf;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ka=fa,la=function(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(ka)ka(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]},ma=this||self,na=/^[\w+/_-]+[=]{0,2}$/,oa=null;var qa=function(a,b){this.a=a;this.i=b};var ra=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},sa=function(){this.o={};this.m=!1;this.F={}};sa.prototype.get=function(a){return this.o["dust."+a]};sa.prototype.set=function(a,b){this.m||(a="dust."+a,this.F.hasOwnProperty(a)||(this.o[a]=b))};sa.prototype.has=function(a){return this.o.hasOwnProperty("dust."+a)};var ua=function(a){var b=[],c;for(c in a.o)a.o.hasOwnProperty(c)&&b.push(c.substr(5));return b};var h=function(a){this.i=new sa;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ra(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};aa=h.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof h?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"==a){if(!ra(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else ra(a)?this.a[Number(a)]=b:this.i.set(a,b)};aa.get=function(a){return"length"==a?this.length():ra(a)?this.a[Number(a)]:this.i.get(a)};aa.length=function(){return this.a.length};aa.cc=function(){for(var a=ua(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new h(a)};
var va=function(a,b){if(ra(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.m||c.F.hasOwnProperty(d)||delete c.o[d]}};aa=h.prototype;aa.pop=function(){return this.a.pop()};aa.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.a.shift()};aa.splice=function(a,b,c){return new h(this.a.splice.apply(this.a,arguments))};aa.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
aa.has=function(a){return ra(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var wa=function(){function a(f,g){if(b[f]){if(b[f].Ub+g>b[f].max)throw Error("Quota exceeded");b[f].Ub+=g}}var b={},c=void 0,d=void 0,e={ph:function(f){c=f},we:function(){c&&a(c,1)},rh:function(f){d=f},Da:function(f){d&&a(d,f)},Oh:function(f,g){b[f]=b[f]||{Ub:0};b[f].max=g},Og:function(f){return b[f]&&b[f].Ub||0},reset:function(){b={}},vg:a};e.onFnConsume=e.ph;e.consumeFn=e.we;e.onStorageConsume=e.rh;e.consumeStorage=e.Da;e.setMax=e.Oh;e.getConsumed=e.Og;e.reset=e.reset;e.consume=e.vg;return e};var xa=function(a,b){this.F=a;this.O=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new sa;this.a=this.o=void 0};xa.prototype.add=function(a,b){za(this,a,b,!1)};var za=function(a,b,c,d){if(!a.i.m)if(a.F.Da(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.F["dust."+b]=!0}else a.i.set(b,c)};
xa.prototype.set=function(a,b){this.i.m||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.F.Da(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};xa.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};xa.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var Aa=function(a){var b=new xa(a.F,a);a.o&&(b.o=a.o);b.O=a.O;b.a=a.a;return b};var Ca=function(){},Da=function(a){return"function"==typeof a},p=function(a){return"string"==typeof a},Ea=function(a){return"number"==typeof a&&!isNaN(a)},Fa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},Ga=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ha=function(a,b){if(a&&Fa(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ia=function(a,b){if(!Ea(a)||
!Ea(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ka=function(a,b){for(var c=new Ja,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},La=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Na=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Oa=function(a){return Math.round(Number(a))||0},Pa=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Qa=function(a){var b=[];if(Fa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ra=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Sa=function(){return(new Date).getTime()},Ja=function(){this.prefix="gtm.";this.values={}};Ja.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ja.prototype.get=function(a){return this.values[this.prefix+a]};
var Ua=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Va=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Wa=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Xa=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ya=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},$a=function(a){for(var b=C,c=0;c<a.length-1;c++){if(!b.hasOwnProperty(a[c]))return;b=b[a[c]]}return b},ab=function(a,b){for(var c=
{},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},bb=function(a){var b=[];La(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var cb=function(a,b){sa.call(this);this.a=a;this.O=b};la(cb,sa);cb.prototype.toString=function(){return this.a};cb.prototype.cc=function(){return new h(ua(this))};cb.prototype.i=function(a,b){a.F.we();return this.O.apply(db(this,a),Array.prototype.slice.call(arguments,1))};var db=function(a,b){var c=function(d,e){this.i=d;this.m=e};c.prototype.a=function(d){var e=this.m;return Fa(d)?eb(e,d):d};c.prototype.F=function(d){return fb(this.m,d)};c.prototype.o=function(){return b.F};return new c(a,b)};
cb.prototype.Ga=function(a,b){try{return this.i.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var fb=function(a,b){for(var c,d=0;d<b.length&&!(c=eb(a,b[d]),c instanceof qa);d++);return c},eb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof cb))throw Error("Attempting to execute non-function "+b[0]+".");return c.i.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.o;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};var gb=function(){sa.call(this)};la(gb,sa);gb.prototype.cc=function(){return new h(ua(this))};var hb=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|Map|List)$/i,ib={Fn:"function",Map:"Object",List:"Array"},D=function(a,b,c){for(var d=0;d<b.length;d++){var e=hb.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],k=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==k){var n=typeof l;l instanceof cb?n="Fn":l instanceof h?n="List":l instanceof gb&&(n="Map");if(n!=k)throw Error("Error in "+
a+". Argument "+f+" has type "+n+", which does not match required type "+(ib[k]||k)+".");}}};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var jb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,kb=function(a){if(null==a)return String(a);var b=jb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},lb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},mb=function(a){if(!a||"object"!=kb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!lb(a,"constructor")&&!lb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||lb(a,b)},F=function(a,b){var c=b||("array"==kb(a)?[]:{}),d;for(d in a)if(lb(a,d)){var e=a[d];"array"==kb(e)?("array"!=kb(c[d])&&(c[d]=[]),c[d]=F(e,c[d])):mb(e)?(mb(c[d])||(c[d]={}),c[d]=F(e,c[d])):c[d]=e}return c};var qb=function(a,b){var c=[],d=[],e=function(g,k){for(var l=ua(g),m=0;m<l.length;m++)k[l[m]]=f(g.get(l[m]))},f=function(g){var k=Ga(c,g);if(-1<k)return d[k];if(g instanceof h){var l=[];c.push(g);d.push(l);for(var m=g.cc(),n=0;n<m.length();n++)l[m.get(n)]=f(g.get(m.get(n)));return l}if(g instanceof gb){var r={};c.push(g);d.push(r);e(g,r);return r}if(g instanceof cb){var t=function(){for(var q=Array.prototype.slice.call(arguments,0),u=0;u<q.length;u++)q[u]=nb(q[u],b);var v=b?b.F:wa(),w=new xa(v);b&&
(w.a=b.a);return f(g.i.apply(g,[w].concat(q)))};c.push(g);d.push(t);e(g,t);return t}switch(typeof g){case "boolean":case "number":case "string":case "undefined":return g;case "object":if(null===g)return null}};return f(a)},nb=function(a,b){var c=[],d=[],e=function(g,k){for(var l in g)g.hasOwnProperty(l)&&k.set(l,f(g[l]))},f=function(g){var k=Ga(c,g);if(-1<k)return d[k];if(Fa(g)||Na(g)){var l=new h([]);c.push(g);d.push(l);for(var m in g)g.hasOwnProperty(m)&&l.set(m,f(g[m]));return l}if(mb(g)){var n=
new gb;c.push(g);d.push(n);e(g,n);return n}if("function"===typeof g){var r=new cb("",function(q){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=qb(this.a(u[v]),b);return f((0,this.m.O)(g,g,u))});c.push(g);d.push(r);e(g,r);return r}var t=typeof g;if(null===g||"string"===t||"number"===t||"boolean"===t)return g};return f(a)};var rb={control:function(a,b){return new qa(a,this.a(b))},fn:function(a,b,c){var d=this.m,e=this.a(b);if(!(e instanceof h))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.o().Da(a.length+f.length);return new cb(a,function(){return function(g){var k=Aa(d);void 0===k.a&&(k.a=this.m.a);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.a(l[m]),l[m]instanceof qa)return l[m];for(var n=e.get("length"),r=
0;r<n;r++)r<l.length?k.set(e.get(r),l[r]):k.set(e.get(r),void 0);k.set("arguments",new h(l));var t=fb(k,f);if(t instanceof qa)return"return"===t.a?t.i:t}}())},list:function(a){var b=this.o();b.Da(arguments.length);for(var c=new h,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.Da(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.o(),c=new gb,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Da(g);c.set(e,f)}return c},undefined:function(){}};function sb(a,b){var c=eb(a,b);if(c instanceof qa||c instanceof cb||c instanceof h||c instanceof gb||null===c||void 0===c||"string"===typeof c||"number"===typeof c||"boolean"===typeof c)return c}var tb=function(){this.m=wa();this.a=new xa(this.m)},ub=function(a,b,c){var d=new cb(b,c);d.m=!0;a.a.set(b,d)};tb.prototype.$b=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};tb.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=sb(this.a,arguments[c]);return b};
tb.prototype.o=function(a,b){var c=Aa(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=sb(c,arguments[e]);return d};var vb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var wb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof h)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new h(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.i(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.i(a,this.get(e),e,this)&&d.push(this.get(e));return new h(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.i(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.i(a,this.get(e),e,this));return new h(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g==d)throw Error("TypeError: Reduce on List with no elements.");}for(var k=f;k<d;k++)this.has(k)&&(e=b.i(a,e,this.get(k),k,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var k=f;0<=k;k--)this.has(k)&&(e=b.i(a,e,this.get(k),k,this));return e},reverse:function(){for(var a=vb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):va(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new h(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.i(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=vb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.i(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):va(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var xb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),yb=new qa("break"),zb=new qa("continue"),Bb=function(a,b){return this.a(a)+this.a(b)},Cb=function(a,b){return this.a(a)&&this.a(b)},Db=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof h))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"==typeof a){if(0<=Ga(xb,b))return nb(a[b].apply(a,vb(c)),this.m);throw Error("TypeError: "+b+" is not a function");}if(a instanceof h){if(a.has(b)){var d=a.get(b);if(d instanceof cb){var e=vb(c);e.unshift(this.m);return d.i.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=Ga(wb.supportedMethods,b)){var f=vb(c);f.unshift(this.m);
return wb[b].apply(a,f)}}if(a instanceof cb||a instanceof gb){if(a.has(b)){var g=a.get(b);if(g instanceof cb){var k=vb(c);k.unshift(this.m);return g.i.apply(g,k)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof cb?a.a:a.toString();if("hasOwnProperty"==b)return a.has.apply(a,vb(c))}throw Error("TypeError: Object has no '"+b+"' property.");},Eb=function(a,b){a=this.a(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");var c=this.m;if(!c.has(a))throw Error("Attempting to assign to undefined value "+
b);var d=this.a(b);c.set(a,d);return d},Fb=function(a){var b=Aa(this.m),c=fb(b,Array.prototype.slice.apply(arguments));if(c instanceof qa)return c},Gb=function(){return yb},Hb=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof qa)return d}},Ib=function(a){for(var b=this.m,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);za(b,d,e,!0)}}},Jb=function(){return zb},Kb=function(a,b,c){var d=new h;b=this.a(b);for(var e=
0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.m.set(a,this.a(f))},Lb=function(a,b){return this.a(a)/this.a(b)},Mb=function(a,b){return this.a(a)==this.a(b)},Nb=function(a){for(var b,c=0;c<arguments.length;c++)b=this.a(arguments[c]);return b};
function Ob(a,b,c){if("string"==typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=fb(e,c);if(f instanceof qa){if("break"==f.a)break;if("return"==f.a)return f}}else if(b instanceof gb||b instanceof h||b instanceof cb)for(var g=b.cc(),k=g.length(),l=0;l<k;l++){var m=a(g.get(l)),n=fb(m,c);if(n instanceof qa){if("break"==n.a)break;if("return"==n.a)return n}}}
var Pb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Ob(function(e){d.set(a,e);return d},b,c)},Qb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Ob(function(e){var f=Aa(d);za(f,a,e,!0);return f},b,c)},Sb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Ob(function(e){var f=Aa(d);f.add(a,e);return f},b,c)},Tb=function(a){return this.m.get(this.a(a))},Ub=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+
a+".");a instanceof gb||a instanceof h||a instanceof cb?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:ra(b)&&(c=a[b]));return c},Vb=function(a,b){return this.a(a)>this.a(b)},Wb=function(a,b){return this.a(a)>=this.a(b)},Xb=function(a,b){return this.a(a)===this.a(b)},Yb=function(a,b){return this.a(a)!==this.a(b)},Zb=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.F(d);if(e instanceof qa)return e},$b=function(a,b){return this.a(a)<this.a(b)},ac=function(a,b){return this.a(a)<=
this.a(b)},bc=function(a,b){return this.a(a)%this.a(b)},cc=function(a,b){return this.a(a)*this.a(b)},dc=function(a){return-this.a(a)},ec=function(a){return!this.a(a)},gc=function(a,b){return this.a(a)!=this.a(b)},hc=function(){return null},ic=function(a,b){return this.a(a)||this.a(b)},jc=function(a,b){var c=this.a(a);this.a(b);return c},kc=function(a){return this.a(a)},lc=function(a){return Array.prototype.slice.apply(arguments)},mc=function(a){return new qa("return",this.a(a))},nc=function(a,b,c){a=
this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof cb||a instanceof h||a instanceof gb)&&a.set(b,c);return c},oc=function(a,b){return this.a(a)-this.a(b)},pc=function(a,b,c){a=this.a(a);var d=this.a(b),e=this.a(c);if(!Fa(d)||!Fa(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,k=0;k<d.length;k++)if(g||a===this.a(d[k]))if(f=this.a(e[k]),f instanceof qa){var l=f.a;if("break"==l)return;if("return"==
l||"continue"==l)return f}else g=!0;if(e.length==d.length+1&&(f=this.a(e[e.length-1]),f instanceof qa&&("return"==f.a||"continue"==f.a)))return f},qc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},rc=function(a){a=this.a(a);return a instanceof cb?"function":typeof a},sc=function(a){for(var b=this.m,c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}},tc=function(a,b,c,d){var e,f=this.a(d);if(this.a(c)&&(e=this.F(f),e instanceof qa)){if("break"==e.a)return;if("return"==
e.a)return e}for(;this.a(a);){e=this.F(f);if(e instanceof qa){if("break"==e.a)break;if("return"==e.a)return e}this.a(b)}},uc=function(a){return~Number(this.a(a))},vc=function(a,b){return Number(this.a(a))<<Number(this.a(b))},wc=function(a,b){return Number(this.a(a))>>Number(this.a(b))},xc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},yc=function(a,b){return Number(this.a(a))&Number(this.a(b))},zc=function(a,b){return Number(this.a(a))^Number(this.a(b))},Ac=function(a,b){return Number(this.a(a))|
Number(this.a(b))};var Cc=function(){this.a=new tb;Bc(this)};Cc.prototype.$b=function(a){return this.a.i(a)};
var Ec=function(a,b){return Dc.a.o(a,b)},Bc=function(a){function b(e,f){var g=d.a,k=String(f);rb.hasOwnProperty(e)&&ub(g,k||e,rb[e])}function c(e,f){ub(d.a,String(e),f)}var d=a;b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);c(0,Bb);c(1,Cb);c(2,Db);c(3,Eb);c(53,Fb);c(4,Gb);c(5,Hb);c(52,Ib);c(6,Jb);c(9,Hb);c(50,Kb);c(10,Lb);c(12,Mb);c(13,Nb);c(47,Pb);c(54,Qb);c(55,Sb);c(15,Tb);c(16,Ub);c(17,Ub);c(18,Vb);c(19,Wb);c(20,Xb);c(21,Yb);c(22,Zb);c(23,$b);c(24,ac);c(25,bc);c(26,cc);c(27,
dc);c(28,ec);c(29,gc);c(45,hc);c(30,ic);c(32,jc);c(33,jc);c(34,kc);c(35,kc);c(46,lc);c(36,mc);c(43,nc);c(37,oc);c(38,pc);c(39,qc);c(40,rc);c(41,sc);c(42,tc);c(58,uc);c(57,vc);c(60,wc);c(61,xc);c(56,yc);c(62,zc);c(59,Ac)},Gc=function(){var a=Dc,b=Fc();ub(a.a,"require",b)},Hc=function(a,b){a.a.a.O=b};
var Ic=[],Jc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Kc=function(a){return Jc[a]},Lc=/[\x00\x22\x26\x27\x3c\x3e]/g;var Pc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Qc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Rc=function(a){return Qc[a]};
Ic[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Pc,Rc)+"'"}};var $c=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,ad={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},bd=function(a){return ad[a]};Ic[16]=function(a){return a};var dd;
var ed=[],fd=[],gd=[],hd=[],id=[],jd={},kd,ld,md,nd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},od=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=jd[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):dd(c,e,b)},qd=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=pd(a[e],b,c));
return d},rd=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=jd[b];return c?c.priorityOverride||0:0},pd=function(a,b,c){if(Fa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(pd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=ed[f];if(!g||b.ed(g))return;c[f]=!0;try{var k=qd(g,b,c);k.vtp_gtmEventId=b.id;d=od(k,b);md&&(d=md.xg(d,k))}catch(x){b.Oe&&b.Oe(x,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[pd(a[l],b,c)]=pd(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var r=pd(a[n],b,c);ld&&(m=m||r===ld.Nb);d.push(r)}return ld&&m?ld.Ag(d):d.join("");case "escape":d=pd(a[1],b,c);if(ld&&Fa(a[1])&&"macro"===a[1][0]&&ld.ah(a))return ld.wh(d);d=String(d);for(var t=2;t<a.length;t++)Ic[a[t]]&&(d=Ic[a[t]](d));return d;case "tag":var q=a[1];if(!hd[q])throw Error("Unable to resolve tag reference "+q+".");return d={Be:a[2],
index:q};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=sd(u,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},sd=function(a,b,c){try{return kd(qd(a,b,c))}catch(d){JSON.stringify(a)}return 2};var td=function(){var a=function(b){return{toString:function(){return b}}};return{Jd:a("convert_case_to"),Kd:a("convert_false_to"),Ld:a("convert_null_to"),Md:a("convert_true_to"),Nd:a("convert_undefined_to"),hi:a("debug_mode_metadata"),za:a("function"),uf:a("instance_name"),yf:a("live_only"),Af:a("malware_disabled"),Bf:a("metadata"),ii:a("original_vendor_template_id"),Ff:a("once_per_event"),Ud:a("once_per_load"),be:a("setup_tags"),de:a("tag_id"),ee:a("teardown_tags")}}();var ud=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.i=a;this.a=c};la(ud,Error);function vd(a,b){if(Fa(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)vd(a[c],b[c])}};var wd=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.m=a;this.i=b;this.a=[]};la(wd,Error);var xd=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var zd=function(){return function(a,b){a instanceof wd||(a=new wd(a,yd));b&&a.a.push(b);throw a;}};function yd(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ea(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var Ad=null,Dd=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}var c=[],d=[];Ad=Bd(a);for(var e=0;e<fd.length;e++){var f=fd[e],g=Cd(f);if(g){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],n=0;n<hd.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Cd=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Ad(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=Ad(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},Bd=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=sd(gd[c],a));return b[c]}};var Ed=function(){this.a={}};function Fd(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(k){g="string"===typeof k?g+(": "+k):k instanceof Error?g+(": "+k.message):g+"."}if(!f)throw new ud(c,d,g);}}function Gd(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));Fd(e,b,d,g);Fd(f,b,d,g)}}}};var Kd=function(a){var b=Hd.w,c=this;this.i=new Ed;this.a={};var d={},e=Gd(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});La(a,function(f,g){var k={};La(g,function(l,m){var n=Id(l,m);k[l]=n.assert;d[l]||(d[l]=n.K)});c.a[f]=function(l,m){var n=k[l];if(!n)throw Jd(l,{},"The requested permission "+l+" is not configured.");var r=Array.prototype.slice.call(arguments,0);n.apply(void 0,r);e.apply(void 0,r)}})},Md=function(a){return Ld.a[a]||
function(){}};function Id(a,b){var c=nd(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Jd;try{return od(c)}catch(d){return{assert:function(e){throw new ud(e,{},"Permission "+e+" is unknown.");},K:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function Jd(a,b,c){return new ud(a,b,c)};var Nd=!1;var Pd={};Pd.Xh=Pa('');Pd.Hg=Pa('');var Qd=Nd,Rd=Pd.Hg,Sd=Pd.Xh;
var fe=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},ge=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;fe(b,"/*")&&(b=b.slice(0,-2));fe(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var k=d[d.length-1];return a.lastIndexOf(k)===a.length-k.length},he=/^[a-z0-9-]+$/i,ie=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
je=function(a,b){var c;if(!(c="https:"!=a.protocol||a.port&&"443"!=a.port)){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!he.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var k;var l=a,m=b[g];if(!ie.exec(m))throw Error("Invalid Wildcard");var n=m.slice(8),r=n.slice(0,n.indexOf("/")),t;var q=l.hostname,u=r;if(0!==u.indexOf("*."))t=q.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=q.toLowerCase().indexOf(u.toLowerCase());
t=-1===v?!1:q.length===u.length?!0:q.length!==u.length+v?!1:"."===q[v-1]}if(t){var w=n.slice(n.indexOf("/"));k=ge(l.pathname+l.search,w)?!0:!1}else k=!1;if(k)return!0}return!1};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var ke,le=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.ig&&(l["fix_"+m]=!0),l.De=l.De||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},r={comment:function(){var q=k.indexOf("--\x3e");if(0<=q)return{content:k.substr(4,q),length:q+3}},endTag:function(){var q=k.match(d);if(q)return{tagName:q[1],length:q[0].length}},atomicTag:function(){var q=r.startTag();
if(q){var u=k.slice(q.length);if(u.match(new RegExp("</\\s*"+q.tagName+"\\s*>","i"))){var v=u.match(new RegExp("([\\s\\S]*?)</\\s*"+q.tagName+"\\s*>","i"));if(v)return{tagName:q.tagName,U:q.U,content:v[1],length:v[0].length+q.length}}}},startTag:function(){var q=k.match(c);if(q){var u={};q[2].replace(e,function(v,w,x,y,A){var B=x||y||A||f.test(w)&&w||null,z=document.createElement("div");z.innerHTML=B;u[w]=z.textContent||z.innerText||B});return{tagName:q[1],U:u,Gb:!!q[3],length:q[0].length}}},chars:function(){var q=
k.indexOf("<");return{length:0<=q?q:k.length}}},t=function(){for(var q in n)if(n[q].test(k)){var u=r[q]();return u?(u.type=u.type||q,u.text=k.substr(0,u.length),k=k.slice(u.length),u):null}};l.De&&function(){var q=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,u=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.Me=function(){return this[this.length-1]};v.gd=function(z){var E=this.Me();return E&&E.tagName&&E.tagName.toUpperCase()===z.toUpperCase()};v.wg=
function(z){for(var E=0,H;H=this[E];E++)if(H.tagName===z)return!0;return!1};var w=function(z){z&&"startTag"===z.type&&(z.Gb=q.test(z.tagName)||z.Gb);return z},x=t,y=function(){k="</"+v.pop().tagName+">"+k},A={startTag:function(z){var E=z.tagName;"TR"===E.toUpperCase()&&v.gd("TABLE")?(k="<TBODY>"+k,B()):l.ui&&u.test(E)&&v.wg(E)?v.gd(E)?y():(k="</"+z.tagName+">"+k,B()):z.Gb||v.push(z)},endTag:function(z){v.Me()?l.Jg&&!v.gd(z.tagName)?y():v.pop():l.Jg&&(x(),B())}},B=function(){var z=k,E=w(x());k=z;if(E&&
A[E.type])A[E.type](E)};t=function(){B();return w(x())}}();return{append:function(q){k+=q},Dh:t,Ai:function(q){for(var u;(u=t())&&(!q[u.type]||!1!==q[u.type](u)););},clear:function(){var q=k;k="";return q},Bi:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.Di="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.Ci=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.m=b;a.s=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,r;for(r in m.U){var t=m.U[r];n+=
" "+r+'="'+(t?t.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.Gb?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.i=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var g in b)a.a=a.a||!b[g]&&g;ke=a})();(function(){function a(){}function b(r){return void 0!==r&&null!==r}function c(r,t,q){var u,v=r&&r.length||0;for(u=0;u<v;u++)t.call(q,r[u],u)}function d(r,t,q){for(var u in r)r.hasOwnProperty(u)&&t.call(q,u,r[u])}function e(r,
t){d(t,function(q,u){r[q]=u});return r}function f(r,t){r=r||{};d(t,function(q,u){b(r[q])||(r[q]=u)});return r}function g(r){try{return m.call(r)}catch(q){var t=[];c(r,function(u){t.push(u)});return t}}var k={Yf:a,Zf:a,$f:a,ag:a,jg:a,kg:function(r){return r},done:a,error:function(r){throw r;},Gh:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function r(q,u,v){var w="data-ps-"+u;if(2===arguments.length){var x=q.getAttribute(w);return b(x)?String(x):x}b(v)&&""!==v?q.setAttribute(w,
v):q.removeAttribute(w)}function t(q,u){var v=q.ownerDocument;e(this,{root:q,options:u,Hb:v.defaultView||v.parentWindow,Ta:v,sc:ke("",{ig:!0}),Tc:[q],rd:"",sd:v.createElement(q.nodeName),Db:[],Ja:[]});r(this.sd,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.Ja,arguments);for(var q;!this.Wb&&this.Ja.length;)q=this.Ja.shift(),"function"===typeof q?this.pg(q):this.Cd(q)};t.prototype.pg=function(q){var u={type:"function",value:q.name||q.toString()};this.nd(u);q.call(this.Hb,this.Ta);this.Te(u)};
t.prototype.Cd=function(q){this.sc.append(q);for(var u,v=[],w,x;(u=this.sc.Dh())&&!(w=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("script"):!1)&&!(x=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("style"):!1);)v.push(u);this.ci(v);w&&this.Tg(u);x&&this.Ug(u)};t.prototype.ci=function(q){var u=this.mg(q);u.se&&(u.cd=this.rd+u.se,this.rd+=u.Ah,this.sd.innerHTML=u.cd,this.$h())};t.prototype.mg=function(q){var u=this.Tc.length,v=[],w=[],x=[];c(q,function(y){v.push(y.text);if(y.U){if(!/^noscript$/i.test(y.tagName)){var A=
u++;w.push(y.text.replace(/(\/?>)/," data-ps-id="+A+" $1"));"ps-script"!==y.U.id&&"ps-style"!==y.U.id&&x.push("atomicTag"===y.type?"":"<"+y.tagName+" data-ps-proxyof="+A+(y.Gb?" />":">"))}}else w.push(y.text),x.push("endTag"===y.type?y.text:"")});return{Ei:q,raw:v.join(""),se:w.join(""),Ah:x.join("")}};t.prototype.$h=function(){for(var q,u=[this.sd];b(q=u.shift());){var v=1===q.nodeType;if(!v||!r(q,"proxyof")){v&&(this.Tc[r(q,"id")]=q,r(q,"id",null));var w=q.parentNode&&r(q.parentNode,"proxyof");
w&&this.Tc[w].appendChild(q)}u.unshift.apply(u,g(q.childNodes))}};t.prototype.Tg=function(q){var u=this.sc.clear();u&&this.Ja.unshift(u);q.src=q.U.src||q.U.ji;q.src&&this.Db.length?this.Wb=q:this.nd(q);var v=this;this.bi(q,function(){v.Te(q)})};t.prototype.Ug=function(q){var u=this.sc.clear();u&&this.Ja.unshift(u);q.type=q.U.type||q.U.TYPE||"text/css";this.di(q);u&&this.write()};t.prototype.di=function(q){var u=this.og(q);this.Yg(u);q.content&&(u.styleSheet&&!u.sheet?u.styleSheet.cssText=q.content:
u.appendChild(this.Ta.createTextNode(q.content)))};t.prototype.og=function(q){var u=this.Ta.createElement(q.tagName);u.setAttribute("type",q.type);d(q.U,function(v,w){u.setAttribute(v,w)});return u};t.prototype.Yg=function(q){this.Cd('<span id="ps-style"/>');var u=this.Ta.getElementById("ps-style");u.parentNode.replaceChild(q,u)};t.prototype.nd=function(q){q.sh=this.Ja;this.Ja=[];this.Db.unshift(q)};t.prototype.Te=function(q){q!==this.Db[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Db.shift(),this.write.apply(this,q.sh),!this.Db.length&&this.Wb&&(this.nd(this.Wb),this.Wb=null))};t.prototype.bi=function(q,u){var v=this.ng(q),w=this.Qh(v),x=this.options.Yf;q.src&&(v.src=q.src,this.Lh(v,w?x:function(){u();x()}));try{this.Xg(v),q.src&&!w||u()}catch(y){this.options.error(y),u()}};t.prototype.ng=function(q){var u=this.Ta.createElement(q.tagName);d(q.U,function(v,w){u.setAttribute(v,w)});q.content&&(u.text=q.content);return u};t.prototype.Xg=function(q){this.Cd('<span id="ps-script"/>');
var u=this.Ta.getElementById("ps-script");u.parentNode.replaceChild(q,u)};t.prototype.Lh=function(q,u){function v(){q=q.onload=q.onreadystatechange=q.onerror=null}var w=this.options.error;e(q,{onload:function(){v();u()},onreadystatechange:function(){/^(loaded|complete)$/.test(q.readyState)&&(v(),u())},onerror:function(){var x={message:"remote script failed "+q.src};v();w(x);u()}})};t.prototype.Qh=function(q){return!/^script$/i.test(q.nodeName)||!!(this.options.Gh&&q.src&&q.hasAttribute("async"))};
return t}();l.postscribe=function(){function r(){var w=u.shift(),x;w&&(x=w[w.length-1],x.Zf(),w.stream=t.apply(null,w),x.$f())}function t(w,x,y){function A(H){H=y.kg(H);v.write(H);y.ag(H)}v=new n(w,y);v.id=q++;v.name=y.name||v.id;var B=w.ownerDocument,z={close:B.close,open:B.open,write:B.write,writeln:B.writeln};e(B,{close:a,open:a,write:function(){return A(g(arguments).join(""))},writeln:function(){return A(g(arguments).join("")+"\n")}});var E=v.Hb.onerror||a;v.Hb.onerror=function(H,M,O){y.error({xi:H+
" - "+M+":"+O});E.apply(v.Hb,arguments)};v.write(x,function(){e(B,z);v.Hb.onerror=E;y.done();v=null;r()});return v}var q=0,u=[],v=null;return e(function(w,x,y){"function"===typeof y&&(y={done:y});y=f(y,k);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.wi?w[0]:w;var A=[w,x,y];w.vh={cancel:function(){A.stream?A.stream.abort():A[1]=a}};y.jg(A);u.push(A);v||r();return w.vh},{streams:{},zi:u,li:n})}();le=l.postscribe}})();function me(a){return""+a}
function ne(a,b){var c=[];return c};var oe=function(a,b){var c=new cb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.m=!0;return c},pe=function(a,b){var c=new gb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Da(e)?c.set(d,oe(a+"_"+d,e)):(Ea(e)||p(e)||"boolean"==typeof e)&&c.set(d,e)}c.m=!0;return c};var qe=function(a,b){D(this.i.a,["apiName:!string","message:?string"],arguments);var c={},d=new gb;return d=pe("AssertApiSubject",c)};var re=function(a,b){D(this.i.a,["actual:?*","message:?string"],arguments);var c={},d=new gb;return d=pe("AssertThatSubject",c)};function se(a){return function(){for(var b=[],c=this.m,d=0;d<arguments.length;++d)b.push(qb(arguments[d],c));return nb(a.apply(null,b))}}var ue=function(){for(var a=Math,b=te,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=se(a[e].bind(a)))}return c};var ve=function(a){var b;return b};var we=function(a){var b;return b};var xe=function(a){D(this.i.a,["uri:!string"],arguments);return encodeURI(a)};var ye=function(a){D(this.i.a,["uri:!string"],arguments);return encodeURIComponent(a)};var ze=function(a){D(this.i.a,["message:?string"],arguments);};var Ae=function(a,b){D(this.i.a,["min:!number","max:!number"],arguments);return Ia(a,b)};var Be=function(){return(new Date).getTime()};var Ce=function(a,b,c){var d=a.m.a;if(!d)throw Error("Missing program state.");d.hg.apply(null,Array.prototype.slice.call(arguments,1))};var De=function(){Ce(this,"read_container_data");var a=new gb;a.set("containerId",'GTM-NWDMT9Q');a.set("version",'153');a.set("environmentName",'');a.set("debugMode",Qd);a.set("previewMode",Sd);a.set("environmentMode",Rd);a.m=!0;return a};var Ee=function(a){return null===a?"null":a instanceof h?"array":a instanceof cb?"function":typeof a};var Fe=function(a){function b(c){return function(d){try{return c(d)}catch(e){(Qd||Sd)&&a.call(this,e.message)}}}return{parse:b(function(c){return nb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(qb(c))})}};var Ge=function(a){return Oa(qb(a,this.m))};var He=function(a){return Number(qb(a,this.m))};var Ie=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var Je=function(a,b,c){var d=null,e=!1;return e?d:null};var te="floor ceil round max min abs pow sqrt".split(" ");var Ke=function(){var a={};return{Pg:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Ph:function(b,c){a[b]=c},reset:function(){a={}}}},Le=function(a,b){D(this.i.a,["apiName:!string","mock:?*"],arguments);};var Me=function(){this.a={}};Me.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};Me.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";this.a[a]=c?void 0:Da(b)?oe(a,b):pe(a,b)};function Ne(){var a={};return a};var G={ya:"_ee",Rc:"_syn",ki:"_uei",Hc:"event_callback",Mb:"event_timeout",I:"gtag.config",ka:"allow_ad_personalization_signals",Ic:"restricted_data_processing",eb:"allow_google_signals",la:"cookie_expires",Lb:"cookie_update",fb:"session_duration",ma:"user_properties",xa:"transport_url",N:"ads_data_redaction"};G.Ke=[G.ka,G.eb,G.Lb];G.Ne=[G.la,G.Mb,G.fb];var C=window,I=document,Oe=navigator,Pe=I.currentScript&&I.currentScript.src,Qe=function(a,b){var c=C[a];C[a]=void 0===c?b:c;return C[a]},Re=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Se=function(a,b,c){var d=I.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Re(d,b);c&&(d.onerror=c);var e;if(null===oa)b:{var f=ma.document,g=f.querySelector&&f.querySelector("script[nonce]");
if(g){var k=g.nonce||g.getAttribute("nonce");if(k&&na.test(k)){oa=k;break b}}oa=""}e=oa;e&&d.setAttribute("nonce",e);var l=I.getElementsByTagName("script")[0]||I.body||I.head;l.parentNode.insertBefore(d,l);return d},Te=function(){if(Pe){var a=Pe.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Ue=function(a,b){var c=I.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=I.body&&I.body.lastChild||
I.body||I.head;d.parentNode.insertBefore(c,d);Re(c,b);void 0!==a&&(c.src=a);return c},Ve=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},We=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Xe=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},K=function(a){C.setTimeout(a,0)},Ye=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Ze=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},$e=function(a){var b=I.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},af=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},bf=function(a){Oe.sendBeacon&&Oe.sendBeacon(a)||Ve(a)},cf=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var df={},N=function(a,b){df[a]=df[a]||[];df[a][b]=!0},ef=function(a){for(var b=[],c=df[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var ff=[];function gf(){var a=Qe("google_tag_data",{});a.ics||(a.ics={entries:{},set:hf,update:jf,addListener:kf,notifyListeners:lf,active:!1});return a.ics}
function hf(a,b,c,d,e,f){var g=gf();g.active=!0;if(void 0!=b){var k=g.entries,l=k[a]||{},m=l.region,n=c&&p(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(n===e||(n===d?m!==e:!n&&!m)){var r=!!(f&&0<f&&void 0===l.update),t={region:n,initial:"granted"===b,update:l.update,quiet:r};k[a]=t;r&&C.setTimeout(function(){k[a]===t&&t.quiet&&(t.quiet=!1,mf(a),lf(),N("TAGGING",2))},f)}}}
function jf(a,b){var c=gf();c.active=!0;if(void 0!=b){var d=nf(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=nf(a);f.quiet?(f.quiet=!1,mf(a)):g!==d&&mf(a)}}function kf(a,b){ff.push({ve:a,Kg:b})}function mf(a){for(var b=0;b<ff.length;++b){var c=ff[b];Fa(c.ve)&&-1!==c.ve.indexOf(a)&&(c.Xe=!0)}}function lf(){for(var a=0;a<ff.length;++a){var b=ff[a];if(b.Xe){b.Xe=!1;try{b.Kg.call()}catch(c){}}}}
var nf=function(a){var b=gf().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},of=function(a){return!(gf().entries[a]||{}).quiet},pf=function(){return gf().active},qf=function(a,b){gf().addListener(a,b)},rf=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!of(b[e]))return!0;return!1}if(c()){var d=!1;qf(b,function(){d||c()||(d=!0,a())})}else a()},sf=function(a,b){if(!1===nf(b)){var c=!1;qf([b],function(){!c&&nf(b)&&(a(),c=!0)})}};var tf=[G.s,G.M],uf=function(a){var b=a[G.Ch];b&&N("GTM",40);var c=a[G.Kh];c&&N("GTM",41);for(var d=Fa(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<tf.length;f++){var g=tf[f],k=a[tf[f]],l=d[e];gf().set(g,k,l,"US","US-MA",c)}},vf=function(a){for(var b=0;b<tf.length;b++){var c=tf[b],d=a[tf[b]];gf().update(c,d)}gf().notifyListeners()},wf=function(a){var b=nf(a);return void 0!=b?b:!0},xf=function(){for(var a=[],b=0;b<tf.length;b++){var c=nf(tf[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+
a.join("")},yf=function(a){sf(a,G.s)},zf=function(a,b){rf(a,b)};var Bf=function(a){return Af?I.querySelectorAll(a):null},Cf=function(a,b){if(!Af)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!I.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Df=!1;if(I.querySelectorAll)try{var Ef=I.querySelectorAll(":root");Ef&&1==Ef.length&&Ef[0]==I.documentElement&&(Df=!0)}catch(a){}var Af=Df;var Hd={},Sf=null,Tf=Math.random();Hd.w="GTM-NWDMT9Q";Hd.Rb="5e1";Hd.Td="";var Uf={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Vf="www.googletagmanager.com/gtm.js";
var Wf=Vf,Xf=null,Yf=null,Zf=null,$f="//www.googletagmanager.com/a?id="+Hd.w+"&cv=153",ag={},bg={},cg=function(){var a=Sf.sequence||0;Sf.sequence=a+1;return a};
var dg=function(){return"&tc="+hd.filter(function(a){return a}).length},gg=function(){eg||(eg=C.setTimeout(fg,500))},fg=function(){eg&&(C.clearTimeout(eg),eg=void 0);void 0===hg||ig[hg]&&!jg&&!kg||(lg[hg]||mg.dh()||0>=ng--?(N("GTM",1),lg[hg]=!0):(mg.Eh(),Ve(og()),ig[hg]=!0,pg=qg=kg=jg=""))},og=function(){var a=hg;if(void 0===a)return"";var b=ef("GTM"),c=ef("TAGGING");return[rg,ig[a]?"":"&es=1",sg[a],b?"&u="+b:"",c?"&ut="+c:"",dg(),jg,kg,qg,pg,"&z=0"].join("")},tg=function(){return[$f,"&v=3&t=t","&pid="+
Ia(),"&rv="+Hd.Rb].join("")},ug="0.005000">Math.random(),rg=tg(),vg=function(){rg=tg()},ig={},jg="",kg="",pg="",qg="",hg=void 0,sg={},lg={},eg=void 0,mg=function(a,b){var c=0,d=0;return{dh:function(){if(c<a)return!1;Sa()-d>=b&&(c=0);return c>=a},Eh:function(){Sa()-d>=b&&(c=0);c++;d=Sa()}}}(2,1E3),ng=1E3,wg=function(a,b){if(ug&&!lg[a]&&hg!==a){fg();hg=a;pg=jg="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";sg[a]="&e="+c+"&eid="+a;gg()}},xg=function(a,b,c){if(ug&&!lg[a]&&
b){a!==hg&&(fg(),hg=a);var d,e=String(b[td.za]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;jg=jg?jg+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var k=(jd[g]?"1":"2")+d;pg=pg?pg+"."+k:"&ti="+k;gg();2022<=og().length&&fg()}},yg=function(a,b,c){if(ug&&!lg[a]){a!==hg&&(fg(),hg=a);var d=c+b;kg=kg?kg+
"."+d:"&epr="+d;gg();2022<=og().length&&fg()}};var zg={},Ag=new Ja,Bg={},Cg={},Fg={name:"dataLayer",set:function(a,b){F(ab(a,b),Bg);Dg()},get:function(a){return Eg(a,2)},reset:function(){Ag=new Ja;Bg={};Dg()}},Eg=function(a,b){if(2!=b){var c=Ag.get(a);if(ug){var d=Gg(a);c!==d&&N("GTM",5)}return c}return Gg(a)},Gg=function(a){var b=a.split("."),c=!1,d=void 0;return c?d:Hg(b)},Hg=function(a){for(var b=Bg,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Ig=function(a,b){Cg.hasOwnProperty(a)||(Ag.set(a,b),F(ab(a,b),Bg),Dg())},Dg=function(a){La(Cg,function(b,c){Ag.set(b,c);F(ab(b,void 0),Bg);F(ab(b,c),Bg);a&&delete Cg[b]})},Jg=function(a,b,c){zg[a]=zg[a]||{};var d=1!==c?Gg(b):Ag.get(b);"array"===kb(d)||"object"===kb(d)?zg[a][b]=F(d):zg[a][b]=d},Kg=function(a,b){if(zg[a])return zg[a][b]},Lg=function(a,b){zg[a]&&delete zg[a][b]};var Og=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Pg=/:[0-9]+$/,Qg=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var k=f[g].split("=");if(decodeURIComponent(k[0]).replace(/\+/g," ")===b){var l=k.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Tg=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Rg(a.protocol)||Rg(C.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
C.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||C.location.hostname).replace(Pg,"").toLowerCase());return Sg(a,b,c,d,e)},Sg=function(a,b,c,d,e){var f,g=Rg(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Ug(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Pg,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||N("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Ga(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Qg(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Rg=function(a){return a?a.replace(":",
"").toLowerCase():""},Ug=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Vg=function(a){var b=I.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||N("TAGGING",1),c="/"+c);var d=b.hostname.replace(Pg,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},Wg=function(a){function b(m){var n=m.split("=")[0];return 0>d.indexOf(n)?m:n+"=0"}function c(m){return m.split("&").map(b).filter(function(n){return void 0!=
n}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=Vg(a),f=a.split(/[?#]/)[0],g=e.search,k=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===k[0]&&(k=k.substring(1));g=c(g);k=c(k);""!==g&&(g="?"+g);""!==k&&(k="#"+k);var l=""+f+g+k;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};function Xg(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),k=g[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var Yg={},Zg=function(a){return void 0==Yg[a]?!1:Yg[a]};var ah=function(a,b,c,d){return $g(d)?Xg(a,String(b||document.cookie),c):[]},dh=function(a,b,c,d,e){if($g(e)){var f=bh(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=ch(f,function(g){return g.Xb},b);if(1===f.length)return f[0].id;f=ch(f,function(g){return g.Bb},c);return f[0]?f[0].id:void 0}}};function eh(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=ah(b,f,!1,d).indexOf(c)}
var ih=function(a,b,c,d){function e(w,x,y){if(null==y)return delete k[x],w;k[x]=y;return w+"; "+x+"="+y}function f(w,x){if(null==x)return delete k[x],w;k[x]=!0;return w+"; "+x}if(!$g(c.Fa))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=fh(b),g=a+"="+b);var k={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.lh);g=e(g,"samesite",
c.Ih);c.Mh&&(g=f(g,"secure"));g=f(g,c.flags);var m=c.domain;if("auto"===m){for(var n=gh(),r=void 0,t=!1,q=0;q<n.length;++q){var u="none"!==n[q]?n[q]:void 0,v=e(g,"domain",u);try{d&&d(a,k)}catch(w){r=w;continue}t=!0;if(!hh(u,c.path)&&eh(v,a,b,c.Fa))return 0}if(r&&!t)throw r;return 1}m&&"none"!==m&&(g=e(g,"domain",m));d&&d(a,k);return hh(m,c.path)?1:eh(g,a,b,c.Fa)?0:1},jh=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return ih(a,b,c)};
function ch(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var k=a[g],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function bh(a,b,c){for(var d=[],e=ah(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),k=g.shift();if(!b||-1!==b.indexOf(k)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),Xb:1*l[0]||1,Bb:1*l[1]||1}))}}return d}
var fh=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},kh=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,mh=/(^|\.)doubleclick\.net$/i,hh=function(a,b){return mh.test(document.location.hostname)||"/"===b&&kh.test(a)},gh=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;mh.test(e)||kh.test(e)||a.push("none");
return a},$g=function(a){if(!Zg("gtag_cs_api")||!a||!pf())return!0;if(!of(a))return!1;var b=nf(a);return null==b?!0:!!b};var nh=function(){for(var a=Oe.userAgent+(I.cookie||"")+(I.referrer||""),b=a.length,c=C.history.length;0<c;)a+=c--^b++;var d=1,e,f,g;if(a)for(d=0,f=a.length-1;0<=f;f--)g=a.charCodeAt(f),d=(d<<6&268435455)+g+(g<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Sa()/1E3)].join(".")},qh=function(a,b,c,d,e){var f=oh(b);return dh(a,f,ph(c),d,e)},rh=function(a,b,c,d){var e=""+oh(c),f=ph(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},oh=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},ph=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function sh(a,b,c){var d,e=a.zb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Sa())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var th=["1"],uh={},yh=function(a){var b=vh(a.prefix);uh[b]||wh(b,a.path,a.domain)||(xh(b,nh(),a),wh(b,a.path,a.domain))};function xh(a,b,c){var d=rh(b,"1",c.domain,c.path),e=sh(c);e.Fa="ad_storage";jh(a,d,e)}function wh(a,b,c){var d=qh(a,b,c,th,"ad_storage");d&&(uh[a]=d);return d}function vh(a){return(a||"_gcl")+"_au"};function zh(){for(var a=Ah,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Bh(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Ah,Ch;function Dh(a){Ah=Ah||Bh();Ch=Ch||zh();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|g>>4,n=(g&15)<<2|k>>6,r=k&63;e||(r=64,d||(n=64));b.push(Ah[l],Ah[m],Ah[n],Ah[r])}return b.join("")}
function Eh(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Ch[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Ah=Ah||Bh();Ch=Ch||zh();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=k&&(c+=String.fromCharCode(g<<6&192|k)))}};var Fh;var Jh=function(){var a=Gh,b=Hh,c=Ih(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){We(I,"mousedown",d);We(I,"keyup",d);We(I,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Kh=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Ih().decorators.push(f)},Lh=function(a,b,c){for(var d=Ih().decorators,e={},f=0;f<d.length;++f){var g=
d[f],k;if(k=!c||g.forms)a:{var l=g.domains,m=a;if(l&&(g.sameHost||m!==I.location.hostname))for(var n=0;n<l.length;n++)if(l[n]instanceof RegExp){if(l[n].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[n])){k=!0;break a}k=!1}if(k){var r=g.placement;void 0==r&&(r=g.fragment?2:1);r===b&&Wa(e,g.callback())}}return e},Ih=function(){var a=Qe("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Mh=/(.*?)\*(.*?)\*(.*)/,Nh=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Oh=/^(?:www\.|m\.|amp\.)+/,Ph=/([^?#]+)(\?[^#]*)?(#.*)?/;function Qh(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Sh=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Dh(String(d))))}var e=b.join("*");return["1",Rh(e),e].join("*")},Rh=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Fh)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,k=0;8>k;k++)g=
g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Fh=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Fh[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Uh=function(){return function(a){var b=Vg(C.location.href),c=b.search.replace("?",""),d=Qg(c,"_gl",!1,!0)||"";a.query=Th(d)||{};var e=Tg(b,"fragment").match(Qh("_gl"));a.fragment=Th(e&&e[3]||"")||{}}},Vh=function(a){var b=Uh(),c=Ih();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Wa(d,e.query),a&&Wa(d,e.fragment));return d},
Th=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Mh.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var k=g[3],l;a:{for(var m=g[2],n=0;n<b;++n)if(m===Rh(k,n)){l=!0;break a}l=!1}if(l){for(var r={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)r[t[q]]=Eh(t[q+1]);return r}}}}catch(u){}};
function Wh(a,b,c,d){function e(n){var r=n,t=Qh(a).exec(r),q=r;if(t){var u=t[2],v=t[4];q=t[1];v&&(q=q+u+v)}n=q;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+m}d=void 0===d?!1:d;var f=Ph.exec(c);if(!f)return"";var g=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+g+k+l}
function Xh(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Lh(b,1,c),e=Lh(b,2,c),f=Lh(b,3,c);if(Xa(d)){var g=Sh(d);c?Yh("_gl",g,a):Zh("_gl",g,a,!1)}if(!c&&Xa(e)){var k=Sh(e);Zh("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){Zh(m,n,r,void 0);break a}if("form"===r.tagName.toLowerCase()){Yh(m,n,r);break a}}"string"==typeof r&&Wh(m,n,r,void 0)}}
function Zh(a,b,c,d){if(c.href){var e=Wh(a,b,c.href,void 0===d?!1:d);Og.test(e)&&(c.href=e)}}
function Yh(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var k=e[g];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=I.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=Wh(a,b,c.action);Og.test(m)&&(c.action=m)}}}
var Gh=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Xh(e,e.hostname)}}catch(g){}},Hh=function(a){try{if(a.action){var b=Tg(Vg(a.action),"host");Xh(a,b)}}catch(c){}},$h=function(a,b,c,d){Jh();Kh(a,b,"fragment"===c?2:1,!!d,!1)},ai=function(a,b){Jh();Kh(a,[Sg(C.location,"host",!0)],b,!0,!0)},bi=function(){var a=I.location.hostname,b=Nh.exec(I.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Oh,""),l=e.replace(Oh,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},ci=function(a,b){return!1===a?!1:a||b||bi()};var di=/^\w+$/,ei=/^[\w-]+$/,fi=/^~?[\w-]+$/,gi={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},hi=function(){if(!Zg("gtag_cs_api")||!pf())return!0;var a=nf("ad_storage");return null==a?!0:!!a},ii=function(a,b){of("ad_storage")?hi()?a():sf(a,"ad_storage"):b?N("TAGGING",3):rf(function(){ii(a,!0)},["ad_storage"])},li=function(a){var b=[];if(!I.cookie)return b;var c=ah(a,I.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=ji(c[d]);e&&-1===Ga(b,e)&&b.push(e)}return ki(b)};
function mi(a){return a&&"string"==typeof a&&a.match(di)?a:"_gcl"}
var oi=function(){var a=Vg(C.location.href),b=Tg(a,"query",!1,void 0,"gclid"),c=Tg(a,"query",!1,void 0,"gclsrc"),d=Tg(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Qg(e,"gclid",!1,void 0);c=c||Qg(e,"gclsrc",!1,void 0)}return ni(b,c,d)},ni=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(ei))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":Zg("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},qi=function(a){var b=oi();ii(function(){return pi(b,a)})};
function pi(a,b,c){function d(m,n){var r=ri(m,e);r&&(jh(r,n,f),g=!0)}b=b||{};var e=mi(b.prefix);c=c||Sa();var f=sh(b,c,!0);f.Fa="ad_storage";var g=!1,k=Math.round(c/1E3),l=function(m){return["GCL",k,m].join(".")};a.aw&&(!0===b.Fi?d("aw",l("~"+a.aw[0])):d("aw",l(a.aw[0])));a.dc&&d("dc",l(a.dc[0]));a.gf&&d("gf",l(a.gf[0]));a.ha&&d("ha",l(a.ha[0]));a.gp&&d("gp",l(a.gp[0]));return g}
var ti=function(a,b){var c=Vh(!0);ii(function(){for(var d=mi(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==gi[f]){var g=ri(f,d),k=c[g];if(k){var l=Math.min(si(k),Sa()),m;b:{for(var n=l,r=ah(g,I.cookie,void 0,"ad_storage"),t=0;t<r.length;++t)if(si(r[t])>n){m=!0;break b}m=!1}if(!m){var q=sh(b,l,!0);q.Fa="ad_storage";jh(g,k,q)}}}}pi(ni(c.gclid,c.gclsrc),b)})},ri=function(a,b){var c=gi[a];if(void 0!==c)return b+c},si=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function ji(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var ui=function(a,b,c,d,e){if(Fa(b)){var f=mi(e),g=function(){for(var k={},l=0;l<a.length;++l){var m=ri(a[l],f);if(m){var n=ah(m,I.cookie,void 0,"ad_storage");n.length&&(k[m]=n.sort()[n.length-1])}}return k};ii(function(){$h(g,b,c,d)})}},ki=function(a){return a.filter(function(b){return fi.test(b)})},vi=function(a,b){for(var c=mi(b.prefix),d={},e=0;e<a.length;e++)gi[a[e]]&&(d[a[e]]=gi[a[e]]);ii(function(){La(d,function(f,g){var k=ah(c+g,I.cookie,void 0,"ad_storage");if(k.length){var l=k[0],m=si(l),
n={};n[f]=[ji(l)];pi(n,b,m)}})})};function wi(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var xi=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(pf()){var c=oi();if(wi(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);ai(function(){return d},3);ai(function(){var e={};return e._up="1",e},1)}}},yi=function(){var a;if(hi()){for(var b=[],c=I.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({yd:f[1],value:f[2]})}var g={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[k].yd]||(g[b[k].yd]=[]),g[b[k].yd].push({timestamp:l[1],Mg:l[2]}))}a=g}else a={};return a};var zi=/^\d+\.fls\.doubleclick\.net$/;function Ai(a,b){of(G.s)?wf(G.s)?a():yf(a):b?N("GTM",42):zf(function(){Ai(a,!0)},[G.s])}function Bi(a){var b=Vg(C.location.href),c=Tg(b,"host",!1);if(c&&c.match(zi)){var d=Tg(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Ci(a,b,c){if("aw"==a||"dc"==a){var d=Bi("gcl"+a);if(d)return d.split(".")}var e=mi(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!wf(G.s)&&c,g;g=oi()[a]||[];if(0<g.length)return f?["0"]:g}var k=ri(a,e);return k?li(k):[]}
var Di=function(a){var b=Bi("gac");if(b)return!wf(G.s)&&a?"0":decodeURIComponent(b);var c=yi(),d=[];La(c,function(e,f){for(var g=[],k=0;k<f.length;k++)g.push(f[k].Mg);g=ki(g);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},Ei=function(a,b){var c=oi().dc||[];Ai(function(){yh(b);var d=uh[vh(b.prefix)],e=!1;if(d&&0<c.length){var f=Sf.joined_au=Sf.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var k=0;k<c.length;k++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[k]+"&auiddc="+d;bf(l);e=f[g]=
!0}}null==a&&(a=e);if(a&&d){var m=vh(b.prefix),n=uh[m];n&&xh(m,n,b)}})};var Fi=/[A-Z]+/,Gi=/\s/,Hi=function(a){if(p(a)&&(a=Ra(a),!Gi.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Fi.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],B:d}}}}},Ji=function(a){for(var b={},c=0;c<a.length;++c){var d=Hi(a[c]);d&&(b[d.id]=d)}Ii(b);var e=[];La(b,function(f,g){e.push(g)});return e};
function Ii(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.B[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Ki=function(){var a=!1;return a};var Q=function(a,b,c,d){return(2===Li()||d||"http:"!=C.location.protocol?a:b)+c},Li=function(){var a=Te(),b;if(1===a)a:{var c=Wf;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=I.getElementsByTagName("script"),k=0;k<g.length&&100>k;k++){var l=g[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var Zi=function(a){return wf(G.s)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=Wg(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})};var $i=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),aj={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},bj={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},cj="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var ej=function(a){var b=Eg("gtm.whitelist");b&&N("GTM",9);var c=b&&Ya(Qa(b),aj),d=Eg("gtm.blacklist");d||(d=Eg("tagTypeBlacklist"))&&N("GTM",3);d?
N("GTM",8):d=[];dj()&&(d=Qa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Ga(Qa(d),"google")&&N("GTM",2);var e=d&&Ya(Qa(d),bj),f={};return function(g){var k=g&&g[td.za];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=bg[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>Ga(c,k))if(l&&0<l.length)for(var r=
0;r<l.length;r++){if(0>Ga(c,l[r])){N("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=Ga(e,k);if(q)t=q;else{var u=Ka(e,l||[]);u&&N("GTM",10);t=u}}var v=!m||t;v||!(0<=Ga(l,"sandboxedScripts"))||c&&-1!==Ga(c,"sandboxedScripts")||(v=Ka(e,cj));return f[k]=v}},dj=function(){return $i.test(C.location&&C.location.hostname)};var fj={xg:function(a,b){b[td.Jd]&&"string"===typeof a&&(a=1==b[td.Jd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(td.Ld)&&null===a&&(a=b[td.Ld]);b.hasOwnProperty(td.Nd)&&void 0===a&&(a=b[td.Nd]);b.hasOwnProperty(td.Md)&&!0===a&&(a=b[td.Md]);b.hasOwnProperty(td.Kd)&&!1===a&&(a=b[td.Kd]);return a}};var gj={active:!0,isWhitelisted:function(){return!0}},hj=function(a){var b=Sf.zones;!b&&a&&(b=Sf.zones=a());return b};var ij=function(){};var jj=!1,kj=0,lj=[];function mj(a){if(!jj){var b=I.createEventObject,c="complete"==I.readyState,d="interactive"==I.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){jj=!0;for(var e=0;e<lj.length;e++)K(lj[e])}lj.push=function(){for(var f=0;f<arguments.length;f++)K(arguments[f]);return 0}}}function nj(){if(!jj&&140>kj){kj++;try{I.documentElement.doScroll("left"),mj()}catch(a){C.setTimeout(nj,50)}}}var oj=function(a){jj?a():lj.push(a)};var pj={},qj={},rj=function(a,b,c,d){if(!qj[a]||Uf[b]||"__zone"===b)return-1;var e={};mb(d)&&(e=F(d,e));e.id=c;e.status="timeout";return qj[a].tags.push(e)-1},sj=function(a,b,c,d){if(qj[a]){var e=qj[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function tj(a){for(var b=pj[a]||[],c=0;c<b.length;c++)b[c]();pj[a]={push:function(d){d(Hd.w,qj[a])}}}
var wj=function(a,b,c){qj[a]={tags:[]};Da(b)&&uj(a,b);c&&C.setTimeout(function(){return tj(a)},Number(c));return vj(a)},uj=function(a,b){pj[a]=pj[a]||[];pj[a].push(Va(function(){return K(function(){b(Hd.w,qj[a])})}))};function vj(a){var b=0,c=0,d=!1;return{add:function(){c++;return Va(function(){b++;d&&b>=c&&tj(a)})},fg:function(){d=!0;b>=c&&tj(a)}}};var xj=function(){function a(d){return!Ea(d)||0>d?0:d}if(!Sf._li&&C.performance&&C.performance.timing){var b=C.performance.timing.navigationStart,c=Ea(Fg.get("gtm.start"))?Fg.get("gtm.start"):0;Sf._li={cst:a(c-b),cbt:a(Yf-b)}}};var Bj={},Cj=function(){return C.GoogleAnalyticsObject&&C[C.GoogleAnalyticsObject]},Dj=!1;
var Ej=function(a){C.GoogleAnalyticsObject||(C.GoogleAnalyticsObject=a||"ga");var b=C.GoogleAnalyticsObject;if(C[b])C.hasOwnProperty(b)||N("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);C[b]=c}xj();return C[b]},Fj=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Cj();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Hj=function(a){},Gj=function(){return C.GoogleAnalyticsObject||"ga"};var Nj=function(){return!1},Oj=function(){var a={};return function(b,c,d){}};function Pj(a,b,c,d){var e=hd[a],f=Qj(a,b,c,d);if(!f)return null;var g=pd(e[td.be],c,[]);if(g&&g.length){var k=g[0];f=Pj(k.index,{D:f,C:1===k.Be?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Qj(a,b,c,d){function e(){if(f[td.Af])k();else{var w=qd(f,c,[]),x=rj(c.id,String(f[td.za]),Number(f[td.de]),w[td.Bf]),y=!1;w.vtp_gtmOnSuccess=function(){if(!y){y=!0;var z=Sa()-B;xg(c.id,hd[a],"5");sj(c.id,x,"success",z);g()}};w.vtp_gtmOnFailure=function(){if(!y){y=!0;var z=Sa()-B;xg(c.id,hd[a],"6");sj(c.id,x,"failure",z);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;xg(c.id,f,"1");var A=function(){var z=Sa()-B;xg(c.id,f,"7");sj(c.id,x,"exception",z);y||(y=!0,k())};var B=Sa();try{od(w,c)}catch(z){A(z)}}}var f=hd[a],g=b.D,k=b.C,l=b.terminate;if(c.ed(f))return null;var m=pd(f[td.ee],c,[]);if(m&&m.length){var n=m[0],r=Pj(n.index,{D:g,C:k,terminate:l},c,d);if(!r)return null;g=r;k=2===n.Be?l:r}if(f[td.Ud]||f[td.Ff]){var t=f[td.Ud]?id:c.Rh,q=g,u=k;if(!t[a]){e=Va(e);var v=Rj(a,t,e);g=v.D;k=v.C}return function(){t[a](q,u)}}return e}
function Rj(a,b,c){var d=[],e=[];b[a]=Sj(d,e,c);return{D:function(){b[a]=Tj;for(var f=0;f<d.length;f++)d[f]()},C:function(){b[a]=Uj;for(var f=0;f<e.length;f++)e[f]()}}}function Sj(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Tj(a){a()}function Uj(a,b){b()};var Xj=function(a,b){for(var c=[],d=0;d<hd.length;d++)if(a.Ab[d]){var e=hd[d];var f=b.add();try{var g=Pj(d,{D:f,C:f,terminate:f},a,d);g?c.push({df:d,Ye:rd(e),$b:g}):(Vj(d,a),f())}catch(l){f()}}b.fg();c.sort(Wj);for(var k=0;k<c.length;k++)c[k].$b();return 0<c.length};function Wj(a,b){var c,d=b.Ye,e=a.Ye;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.df,k=b.df;f=g>k?1:g<k?-1:0}return f}
function Vj(a,b){if(!ug)return;var c=function(d){var e=b.ed(hd[d])?"3":"4",f=pd(hd[d][td.be],b,[]);f&&f.length&&c(f[0].index);xg(b.id,hd[d],e);var g=pd(hd[d][td.ee],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Yj=!1,Zj=function(a,b,c,d,e){if("gtm.js"==b){if(Yj)return!1;Yj=!0}wg(a,b);var f=wj(a,d,e);Jg(a,"event",1);Jg(a,"ecommerce",1);Jg(a,"gtm");var g={id:a,name:b,ed:ej(c),Ab:[],Rh:[],Oe:function(){N("GTM",6)}};g.Ab=Dd(g);var k=Xj(g,f);"gtm.js"!==b&&"gtm.sync"!==b||Hj(Hd.w);if(!k)return k;for(var l=0;l<g.Ab.length;l++)if(g.Ab[l]){var m=hd[l];if(m&&!Uf[String(m[td.za])])return!0}return!1};function bk(a,b){}function ck(a,b){return dk()?bk(a,b):void 0}
function dk(){var a=!1;return a};var ek=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.D=function(){};this.C=function(){};this.eventId=void 0},fk=function(a){var b=new ek;b.eventModel=a;return b},gk=function(a,b){a.targetConfig=b;return a},hk=function(a,b){a.containerConfig=b;return a},ik=function(a,b){a.a=b;return a},jk=function(a,b){a.globalConfig=b;return a},kk=function(a,b){a.D=b;return a},lk=function(a,b){a.C=b;return a};
ek.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var mk=function(a){function b(e){La(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];La(c,function(e){d.push(e)});return d};var nk;if(3===Hd.Rb.length)nk="g";else{var ok="G";nk=ok}
var pk={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:nk,OPT:"o"},qk=function(a){var b=Hd.w.split("-"),c=b[0].toUpperCase(),d=pk[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Hd.Rb.length){var g="w";f="2"+g}else f="";return f+d+Hd.Rb+e};function rk(){var a=!1;return a}
function sk(a,b,c){function d(r){var t;Sf.reported_gclid||(Sf.reported_gclid={});t=Sf.reported_gclid;var q=f+(r?"gcu":"gcs");if(!t[q]){t[q]=!0;var u=[],v=function(B,z){z&&u.push(B+"="+encodeURIComponent(z))},w="https://www.google.com";
v("gclid",tk(b,f));v("gclsrc",g);v("gtm",qk(!c));var A=w+"/pagead/landing?"+u.join("&");bf(A)}}var e=oi(),f=e.gclid||"",g=e.gclsrc,k=e.dclid||"",l=!a&&(!f||g&&"aw.ds"!==g?!1:!0),m=rk();if(l||m){var n=""+nh();m?zf(function(){d();wf(G.s)||yf(function(){return d(!0)})},[G.s]):d()}}
function tk(a,b){return b}var xl={},yl=["G","GP"];xl.ff="";var zl=xl.ff.split(",");function Al(){var a=Sf;return a.gcq=a.gcq||new Bl}
var Cl=function(a,b,c){Al().register(a,b,c)},Dl=function(a,b,c,d){Al().push("event",[b,a],c,d)},El=function(a,b){Al().push("config",[a],b)},Fl={},Gl=function(a){return!0},Hl=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.a=!1},Il=function(a,b,c,d,e){this.type=a;this.m=b;this.ca=c||
"";this.a=d;this.i=e},Bl=function(){this.m={};this.i={};this.a=[]},Jl=function(a,b){var c=Hi(b);return a.m[c.containerId]=a.m[c.containerId]||new Hl},Kl=function(a,b,c){if(b){var d=Hi(b);if(d&&1===Jl(a,b).status&&Gl(d.prefix)){Jl(a,b).status=2;var e={};ug&&(e.timeoutId=C.setTimeout(function(){N("GTM",38);gg()},3E3));a.push("require",[e],d.containerId);Fl[d.containerId]=Sa();if(Ki()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",k=("http:"!=C.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=ck(c,g)||k;Se(l)}}}},Ll=function(a,b,c,d){if(d.ca){var e=Jl(a,d.ca),
f=e.m;if(f){var g=F(c),k=F(e.targetConfig[d.ca]),l=F(e.containerConfig),m=F(e.i),n=F(a.i),r=Eg("gtm.uniqueEventId"),t=Hi(d.ca).prefix,q=lk(kk(jk(ik(hk(gk(fk(g),k),l),m),n),function(){yg(r,t,"2");}),function(){yg(r,t,"3");});try{yg(r,t,"1");f(d.ca,b,d.m,q)}catch(u){
yg(r,t,"4");}}}};
Bl.prototype.register=function(a,b,c){if(3!==Jl(this,a).status){Jl(this,a).m=b;Jl(this,a).status=3;c&&(Jl(this,a).i=c);var d=Hi(a),e=Fl[d.containerId];if(void 0!==e){var f=Sf[d.containerId].bootstrap,g=d.prefix.toUpperCase();Sf[d.containerId]._spx&&(g=g.toLowerCase());var k=Eg("gtm.uniqueEventId"),l=g,m=Sa()-f;if(ug&&!lg[k]){k!==hg&&(fg(),hg=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);qg=qg?qg+","+n:"&cl="+n}delete Fl[d.containerId]}this.flush()}};
Bl.prototype.push=function(a,b,c,d){var e=Math.floor(Sa()/1E3);Kl(this,c,b[0][G.xa]||this.i[G.xa]);this.a.push(new Il(a,e,c,b,d));d||this.flush()};
Bl.prototype.flush=function(a){for(var b=this;this.a.length;){var c=this.a[0];if(c.i)c.i=!1,this.a.push(c);else switch(c.type){case "require":if(3!==Jl(this,c.ca).status&&!a)return;ug&&C.clearTimeout(c.a[0].timeoutId);break;case "set":La(c.a[0],function(l,m){F(ab(l,m),b.i)});break;case "config":var d=c.a[0],e=!!d[G.uc];delete d[G.uc];var f=Jl(this,c.ca),g=Hi(c.ca),k=g.containerId===g.id;e||(k?f.containerConfig={}:f.targetConfig[c.ca]={});f.a&&e||Ll(this,G.I,d,c);f.a=!0;delete d[G.ya];k?F(d,f.containerConfig):
F(d,f.targetConfig[c.ca]);break;case "event":Ll(this,c.a[1],c.a[0],c)}this.a.shift()}};var Ml=function(a,b){return!0};var Nl=function(a,b){var c;return c};var Ol=function(a){};var Pl=function(a){var b;return nb(b,this.m)};var Ql=function(a,b){var c=null;return nb(c,this.m)};var Rl=function(a){var b;D(this.i.a,["path:!string"],arguments);Ce(this,"access_globals","readwrite",a);var c=a.split("."),d=$a(c),e=c[c.length-1];if(void 0===d)throw Error("Path "+a+" does not exist.");var f=d[e];void 0===f&&(f=[],d[e]=f);b=function(){if(!Da(f.push))throw Error("Object at "+a+" in window is not an array.");f.push.apply(f,Array.prototype.slice.call(arguments,0))};return nb(b,this.m)};var Sl=function(a){var b;return b};var Tl=function(a,b){b=void 0===b?!0:b;var c;return c};var Ul=function(a,b){var c;return c};var Vl=function(a,b){var c;return c};var Wl=function(a){var b="";return b};var Xl=function(a){var b="";return b};var Yl=function(a,b){};var Zl={},$l=function(a,b,c,d){D(this.i.a,["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);Ce(this,"inject_script",a);var e=this.m,f=function(){b instanceof cb&&b.Ga(e)},g=function(){c instanceof cb&&c.Ga(e)};if(!d){Se(a,f,g);return}var k=d;Zl[k]?(Zl[k].onSuccess.push(f),Zl[k].onFailure.push(g)):(Zl[k]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=Zl[k].onSuccess,m=0;m<l.length;m++)K(l[m]);l.push=function(n){K(n);
return 0}},g=function(){for(var l=Zl[k].onFailure,m=0;m<l.length;m++)K(l[m]);Zl[k]=null},Se(a,f,g));};var am=function(){return!1},bm={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var cm=function(){};var dm={},em={};dm.getItem=function(a){var b=null;return b};dm.setItem=function(a,b){};
dm.removeItem=function(a){};dm.clear=function(){};var fm=function(a,b){var c=!1;return c};var gm=function(a,b,c){};var hm=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var im=function(a,b,c){D(this.i.a,["path:!string","value:?*","overrideExisting:?boolean"],arguments);Ce(this,"access_globals","readwrite",a);var d=a.split("."),e=C,f;for(f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;if(void 0===e[d[f]]||c)return e[d[f]]=qb(b,this.m),!0;return!1};var jm=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var km=function(a,b,c){var d=this;};var lm=function(a){var b;return b};function mm(a){}
function nm(a,b){var c;return nb(c,this.m)}function om(){var a="";return a}
function pm(){var a="";return a}
var Fc=function(){var a=new Me;Ki()?(a.add("injectHiddenIframe",Ca),a.add("injectScript",Ca)):(a.add("injectHiddenIframe",Yl),a.add("injectScript",$l));var b=gm;a.add("addEventCallback",mm);a.add("aliasInWindow",Ml);a.add("assertThat",re);a.add("assertApi",qe);a.add("callInWindow",Nl);a.add("callLater",Ol);a.add("copyFromDataLayer",
nm);a.add("copyFromWindow",Pl);a.add("createQueue",Rl);a.add("createArgumentsQueue",Ql);a.add("decodeUri",ve);a.add("decodeUriComponent",we);a.add("encodeUri",xe);a.add("encodeUriComponent",ye);a.add("fail",ze);a.add("generateRandom",Ae);a.add("getCookieValues",Tl);a.add("getQueryParameters",Ul);a.add("getReferrerQueryParameters",Vl);a.add("getReferrerUrl",Wl);a.add("getTimestamp",Be);a.add("getType",Ee);a.add("getUrl",Xl);a.add("logToConsole",cm);a.add("makeInteger",Ge);a.add("makeNumber",He);a.add("makeString",
Ie);a.add("makeTableMap",Je);a.add("Math",ue());a.add("mock",Le);a.add("queryPermission",fm);a.add("readCharacterSet",om);a.add("readTitle",pm);a.add("sendPixel",b);a.add("setCookie",hm);a.add("setInWindow",im);a.add("sha256",km);a.add("TestHelper",Ne());a.add("getContainerVersion",De);a.add("toBase64",lm,!("btoa"in C)),a.add("fromBase64",
Sl,!("atob"in C));a.add("localStorage",bm,!am());
return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else throw Error(c+" is not a valid API name.");return d}};var Dc,Ld;
function qm(){var a=data.runtime||[],b=data.runtime_lines;Dc=new Cc;rm();dd=function(e,f,g){sm(f);var k=new gb;La(f,function(q,u){k.set(q,nb(u))});Dc.a.a.o=zd();var l={hg:Md(e),eventId:void 0!==g?g.id:void 0,Zb:e,log:function(){}};if(Nj()){var m=Oj(),n=void 0,r=void 0;l.da={i:{},a:function(q,u,v){1===u&&(n=q);7===u&&(r=v);m(q,u,v)},m:Ke()};l.log=function(q,u){if(n){var v=Array.prototype.slice.call(arguments,1);m(n,4,{level:q,source:r,message:v})}}}var t=Ec(l,[e,k]);Dc.a.a.o=void 0;t instanceof qa&&
"return"===t.a&&(t=t.i);return qb(t)};Gc();for(var c=0;c<a.length;c++){var d=a[c];if(!Fa(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&vd(d,b[c]);Dc.$b(d)}}function sm(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Da(b)&&(a.gtmOnSuccess=function(){K(b)});Da(c)&&(a.gtmOnFailure=function(){K(c)})}
function rm(){var a=Dc;Sf.SANDBOXED_JS_SEMAPHORE=Sf.SANDBOXED_JS_SEMAPHORE||0;Hc(a,function(b,c,d){Sf.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{Sf.SANDBOXED_JS_SEMAPHORE--}})}function tm(a){void 0!==a&&La(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");bg[e]=bg[e]||[];bg[e].push(b)}})};var um=["GP","G"],vm="G".split(/,/);vm.push("GF");vm.push("HA");
vm.push("UA");vm.push("AW");var wm=!1;wm=!0;var xm=null,ym={},zm={},Am;function Bm(a,b){var c={event:a};b&&(c.eventModel=F(b),b[G.Hc]&&(c.eventCallback=b[G.Hc]),b[G.Mb]&&(c.eventTimeout=b[G.Mb]));return c}
var Gm={config:function(a){},event:function(a){var b=a[1];if(p(b)&&!(3<a.length)){var c;if(2<a.length){if(!mb(a[2])&&void 0!=a[2])return;c=a[2]}var d=Bm(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=Ld.i;d.a[b]?d.a[b].push(c):d.a[b]=[c]}},set:function(a){var b;
2==a.length&&mb(a[1])?b=F(a[1]):3==a.length&&p(a[1])&&(b={},mb(a[2])||Fa(a[2])?b[a[1]]=F(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}};var Hm={policy:!0};var Im=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Km=function(a){var b=Jm(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Lm=!1,Mm=[];function Nm(){if(!Lm){Lm=!0;for(var a=0;a<Mm.length;a++)K(Mm[a])}}var Om=function(a){Lm?K(a):Mm.push(a)};var en=function(a){if(dn(a))return a;this.a=a};en.prototype.Sg=function(){return this.a};var dn=function(a){return!a||"object"!==kb(a)||mb(a)?!1:"getUntrustedUpdateValue"in a};en.prototype.getUntrustedUpdateValue=en.prototype.Sg;var fn=[],gn=!1,hn=function(a){return C["dataLayer"].push(a)},jn=function(a){var b=Sf["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function kn(a){var b=a._clear;La(a,function(f,g){"_clear"!==f&&(b&&Ig(f,void 0),Ig(f,g))});Xf||(Xf=a["gtm.start"]);var c=a.event,d=a["gtm.uniqueEventId"];if(!c)return!1;d||(d=cg(),a["gtm.uniqueEventId"]=d,Ig("gtm.uniqueEventId",d));Zf=c;var e=ln(a);Zf=null;switch(c){case "gtm.init":N("GTM",19),e&&N("GTM",20)}return e}
function ln(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Sf.zones;d=e?e.checkState(Hd.w,c):gj;return d.active?Zj(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function mn(){for(var a=!1;!gn&&0<fn.length;){gn=!0;delete Bg.eventModel;Dg();var b=fn.shift();if(null!=b){var c=dn(b);if(c){var d=b;b=dn(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var g=e[f],k=Eg(g,1);if(Fa(k)||mb(k))k=F(k);Cg[g]=k}}try{if(Da(b))try{b.call(Fg)}catch(u){}else if(Fa(b)){var l=b;if(p(l[0])){var m=
l[0].split("."),n=m.pop(),r=l.slice(1),t=Eg(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,r)}catch(u){}}}else{if(Na(b)){a:{if(b.length&&p(b[0])){var q=Gm[b[0]];if(q&&(!c||!Hm[b[0]])){b=q(b);break a}}b=void 0}if(!b){gn=!1;continue}}a=kn(b)||a}}finally{c&&Dg(!0)}}gn=!1}return!a}function nn(){var a=mn();try{Im(C["dataLayer"],Hd.w)}catch(b){}return a}
var pn=function(){var a=Qe("dataLayer",[]),b=Qe("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};oj(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Om(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<Sf.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new en(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);fn.push.apply(fn,d);if(300<
this.length)for(N("GTM",4);300<this.length;)this.shift();var g="boolean"!==typeof f||f;return mn()&&g};fn.push.apply(fn,a.slice(0));on()&&K(nn)},on=function(){var a=!0;return a};var qn={};qn.Nb=new String("undefined");
var rn=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===qn.Nb?b:a[d]);return c.join("")}};rn.prototype.toString=function(){return this.a("undefined")};rn.prototype.valueOf=rn.prototype.toString;qn.Of=rn;qn.Qc={};qn.Ag=function(a){return new rn(a)};var sn={};qn.Fh=function(a,b){var c=cg();sn[c]=[a,b];return c};qn.xe=function(a){var b=a?0:1;return function(c){var d=sn[c];if(d&&"function"===typeof d[b])d[b]();sn[c]=void 0}};qn.ah=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};qn.wh=function(a){if(a===qn.Nb)return a;var b=cg();qn.Qc[b]=a;return'google_tag_manager["'+Hd.w+'"].macro('+b+")"};qn.mh=function(a,b,c){a instanceof qn.Of&&(a=a.a(qn.Fh(b,c)),b=Ca);return{cd:a,D:b}};var tn=function(a,b,c){function d(f,g){var k=f[g];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Ye(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},un=function(a){Sf.hasOwnProperty("autoEventsSettings")||(Sf.autoEventsSettings={});var b=Sf.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},vn=function(a,b,c){un(a)[b]=c},wn=function(a,b,c,d){var e=un(a),f=Ua(e,b,d);e[b]=c(f)},xn=function(a,b,c){var d=un(a);return Ua(d,b,c)};var yn=["input","select","textarea"],zn=["button","hidden","image","reset","submit"],An=function(a){var b=a.tagName.toLowerCase();return!Ha(yn,function(c){return c===b})||"input"===b&&Ha(zn,function(c){return c===a.type.toLowerCase()})?!1:!0},Bn=function(a){return a.form?a.form.tagName?a.form:I.getElementById(a.form):af(a,["form"],100)},Cn=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(An(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var Dn=!!C.MutationObserver,En=void 0,Fn=function(a){if(!En){var b=function(){var c=I.body;if(c)if(Dn)(new MutationObserver(function(){for(var e=0;e<En.length;e++)K(En[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;We(c,"DOMNodeInserted",function(){d||(d=!0,K(function(){d=!1;for(var e=0;e<En.length;e++)K(En[e])}))})}};En=[];I.body?b():K(b)}En.push(a)};
var Qn=function(){var a=I.body,b=I.documentElement||a&&a.parentElement,c,d;if(I.compatMode&&"BackCompat"!==I.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};N("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Rn=function(a){var b=Qn(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,0)+
Math.max(e.right-d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0},Sn=function(a){if(I.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!C.getComputedStyle)return!0;var c=C.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var k=g.indexOf("opacity(");0<=k&&(g=g.substring(k+8,g.indexOf(")",k)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-
1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=C.getComputedStyle(d,null))}return!1};var Tn=[],Un=!(!C.IntersectionObserver||!C.IntersectionObserverEntry),Vn=function(a,b,c){for(var d=new C.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<Tn.length;f++)if(!Tn[f])return Tn[f]=d,f;return Tn.push(d)-1},Wn=function(a,b,c){function d(k,l){var m={top:0,bottom:0,right:0,left:0,width:0,
height:0},n={boundingClientRect:k.getBoundingClientRect(),intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:k,time:Sa()};K(function(){return a(n)})}for(var e=[],f=[],g=0;g<b.length;g++)e.push(0),f.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=Rn(b[k]);if(l>e[k])for(;f[k]<c.length-1&&l>=c[f[k]+1];)d(b[k],l),f[k]++;else if(l<e[k])for(;0<=f[k]&&l<=c[f[k]];)d(b[k],l),f[k]--;e[k]=l}}},Xn=function(a,b,c){for(var d=0;d<c.length;d++)1<
c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(Un){var e=!1;K(function(){e||Wn(a,b,c)()});return Vn(function(f){e=!0;for(var g={$a:0};g.$a<f.length;g={$a:g.$a},g.$a++)K(function(k){return function(){return a(f[k.$a])}}(g))},b,c)}return C.setInterval(Wn(a,b,c),1E3)},Yn=function(a){Un?0<=a&&a<Tn.length&&Tn[a]&&(Tn[a].disconnect(),Tn[a]=void 0):C.clearInterval(a)};var $n=C.clearTimeout,ao=C.setTimeout,R=function(a,b,c){if(Ki()){b&&K(b)}else return Se(a,b,c)},bo=function(){return C.location.href},co=function(a){return Tg(Vg(a),"fragment")},eo=function(a){return Ug(Vg(a))},T=function(a,b){return Eg(a,b||2)},fo=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=hn(a)):d=hn(a);return d},go=function(a,b){C[a]=b},U=function(a,b,c){b&&(void 0===C[a]||c&&!C[a])&&(C[a]=
b);return C[a]},ho=function(a,b,c){return ah(a,b,void 0===c?!0:!!c)},io=function(a,b,c){return 0===jh(a,b,c)},jo=function(a,b){if(Ki()){b&&K(b)}else Ue(a,b)},ko=function(a){return!!xn(a,"init",!1)},lo=function(a){vn(a,"init",!0)},mo=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Wf;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";R(Q("https://","http://",c))},no=function(a,b){var c=a[b];return c};
var oo=qn.mh;function Lo(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Mo=new Ja;function No(a,b){function c(g){var k=Vg(g),l=Tg(k,"protocol"),m=Tg(k,"host",!0),n=Tg(k,"port"),r=Tg(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Oo(a){return Po(a)?1:0}
function Po(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Fa(c)){for(var d=0;d<c.length;d++)if(Oo({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var g=0;g<f.length;g++)if(b[f[g]]){e=b[f[g]](c);break a}}catch(t){}}e=!1}return e;case "_ew":return Lo(b,c);case "_eq":return String(b)==String(c);
case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var k;k=String(b).split(",");return 0<=Ga(k,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var l;var m=a.ignore_case?"i":void 0;try{var n=String(c)+m,r=Mo.get(n);r||(r=new RegExp(c,m),Mo.set(n,r));l=r.test(b)}catch(t){l=!1}return l;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return No(b,c)}return!1};var Qo=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Ro={},So=encodeURI,V=encodeURIComponent,To=Ve;var Uo=function(a,b){if(!a)return!1;var c=Tg(Vg(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Vo=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Ro.bh=function(){var a=!1;return a};var mq=function(){var a=C.gaGlobal=C.gaGlobal||{};a.hid=a.hid||Ia();return a.hid};var vq=window,wq=document,xq=function(a){var b=vq._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===vq["ga-disable-"+a])return!0;try{var c=vq.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Xg("AMP_TOKEN",String(wq.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return wq.getElementById("__gaOptOutExtension")?!0:!1};
function Aq(a,b){delete b.eventModel[G.ya];if(a!==G.I){var c=b.getWithConfig(G.mc);if(Fa(c)){N("GTM",26);for(var d={},e=0;e<c.length;e++){var f=c[e],g=b.getWithConfig(f);void 0!==g&&(d[f]=g)}b.eventModel=d}}Cq(b.eventModel)}var Cq=function(a){La(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[G.ma]||{};La(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Fq=function(a,b,c){Dl(b,c,a)},Gq=function(a,b,c){Dl(b,c,a,!0)},Iq=function(a,b){};
function Hq(a,b){}var Z={b:{}};

Z.b.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(y){for(var A=[],B=y.split(","),z=0;z<B.length;z++){var E=Number(B[z]);if(isNaN(E))return[];n.test(B[z])||A.push(E)}return A}function c(){var y=0,A=0;return function(){var B=Qn(),z=B.height;y=Math.max(v.scrollLeft+B.width,y);A=Math.max(v.scrollTop+z,A);return{Dg:y,Eg:A}}}function d(){q=U("self");
u=q.document;v=u.scrollingElement||u.body&&u.body.parentNode;x=c()}function e(y,A,B,z){var E=l(A),H={},M;for(M in E){H.Ka=M;if(E.hasOwnProperty(H.Ka)){var O=Number(H.Ka);y<O||(fo({event:"gtm.scrollDepth","gtm.scrollThreshold":O,"gtm.scrollUnits":B.toLowerCase(),"gtm.scrollDirection":z,"gtm.triggers":E[H.Ka].join(",")}),wn("sdl",A,function(ca){return function(da){delete da[ca.Ka];return da}}(H),{}))}H={Ka:H.Ka}}}function f(){var y=x(),A=y.Dg,B=y.Eg,z=A/v.scrollWidth*100,E=B/v.scrollHeight*100;e(A,
"horiz.pix",r.Pb,t.Pd);e(z,"horiz.pct",r.Ob,t.Pd);e(B,"vert.pix",r.Pb,t.je);e(E,"vert.pct",r.Ob,t.je);vn("sdl","pending",!1)}function g(){var y=250,A=!1;u.scrollingElement&&u.documentElement&&q.addEventListener&&(y=50,A=!0);var B=0,z=!1,E=function(){z?B=ao(E,y):(B=0,f(),ko("sdl")&&!a()&&(Xe(q,"scroll",H),Xe(q,"resize",H),vn("sdl","init",!1)));z=!1},H=function(){A&&x();B?z=!0:(B=ao(E,y),vn("sdl","pending",!0))};return H}function k(y,A,B){if(A){var z=b(String(y));wn("sdl",B,function(E){for(var H=0;H<
z.length;H++){var M=String(z[H]);E.hasOwnProperty(M)||(E[M]=[]);E[M].push(A)}return E},{})}}function l(y){return xn("sdl",y,{})}function m(y){K(y.vtp_gtmOnSuccess);var A=y.vtp_uniqueTriggerId,B=y.vtp_horizontalThresholdsPixels,z=y.vtp_horizontalThresholdsPercent,E=y.vtp_verticalThresholdUnits,H=y.vtp_verticalThresholdsPixels,M=y.vtp_verticalThresholdsPercent;switch(y.vtp_horizontalThresholdUnits){case r.Pb:k(B,A,"horiz.pix");break;case r.Ob:k(z,A,"horiz.pct")}switch(E){case r.Pb:k(H,A,"vert.pix");
break;case r.Ob:k(M,A,"vert.pct")}ko("sdl")?xn("sdl","pending")||(w||(d(),w=!0),K(function(){return f()})):(d(),w=!0,v&&(lo("sdl"),vn("sdl","pending",!0),K(function(){f();if(a()){var O=g();We(q,"scroll",O);We(q,"resize",O)}else vn("sdl","init",!1)})))}var n=/^\s*$/,r={Ob:"PERCENT",Pb:"PIXELS"},t={je:"vertical",Pd:"horizontal"},q,u,v,w=!1,x;(function(y){Z.__sdl=y;Z.__sdl.g="sdl";Z.__sdl.h=!0;Z.__sdl.priorityOverride=0})(function(y){y.vtp_triggerStartOption?m(y):Om(function(){m(y)})})}();

Z.b.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.g="jsm";Z.__jsm.h=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=U("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();Z.b.c=["google"],function(){(function(a){Z.__c=a;Z.__c.g="c";Z.__c.h=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
Z.b.e=["google"],function(){(function(a){Z.__e=a;Z.__e.g="e";Z.__e.h=!0;Z.__e.priorityOverride=0})(function(a){return String(Kg(a.vtp_gtmEventId,"event"))})}();
Z.b.f=["google"],function(){(function(a){Z.__f=a;Z.__f.g="f";Z.__f.h=!0;Z.__f.priorityOverride=0})(function(a){var b=T("gtm.referrer",1)||I.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Tg(Vg(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):eo(String(b)):String(b)})}();
Z.b.j=["google"],function(){(function(a){Z.__j=a;Z.__j.g="j";Z.__j.h=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=U(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.b.k=["google"],function(){(function(a){Z.__k=a;Z.__k.g="k";Z.__k.h=!0;Z.__k.priorityOverride=0})(function(a){return ho(a.vtp_name,T("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.g="access_globals";Z.__access_globals.h=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],k=0;k<c.length;k++){var l=c[k],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(n,r,t){if(!p(t))throw d(n,{},"Key must be a string.");if("read"===r){if(-1<Ga(e,t))return}else if("write"===r){if(-1<Ga(f,t))return}else if("readwrite"===r){if(-1<Ga(f,t)&&-1<Ga(e,t))return}else if("execute"===r){if(-1<Ga(g,t))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+r);throw d(n,{},"Prohibited "+r+" on global variable: "+
t+".");},K:a}})}();
Z.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.g="u";Z.__u.h=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=T("gtm.url",1);c=c||bo();var d=b[a("vtp_component")];if(!d||"URL"==d)return eo(String(c));var e=Vg(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Fa(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var r=Tg(e,"QUERY",void 0,void 0,m[n]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=Tg(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.b.v=["google"],function(){(function(a){Z.__v=a;Z.__v.g="v";Z.__v.h=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=T(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.b.tl=["google"],function(){function a(b){return function(){if(b.hd&&b.kd>=b.hd)b.dd&&U("self").clearInterval(b.dd);else{b.kd++;var c=(new Date).getTime();fo({event:b.T,"gtm.timerId":b.dd,"gtm.timerEventNumber":b.kd,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.hd,"gtm.timerStartTime":b.cf,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.cf,"gtm.triggers":b.Vh})}}}(function(b){Z.__tl=b;Z.__tl.g="tl";Z.__tl.h=!0;Z.__tl.priorityOverride=0})(function(b){K(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{T:b.vtp_eventName,kd:0,interval:Number(b.vtp_interval),hd:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),Vh:String(b.vtp_uniqueTriggerId||"0"),cf:(new Date).getTime()};c.dd=U("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.b.ua=["google"],function(){var a,b={},c=function(e){zf(function(){d(e)},[G.M,G.s])},d=function(e){var f={},g={},k={},l={},m={};if(e.vtp_gaSettings){var n=e.vtp_gaSettings;F(Vo(n.vtp_fieldsToSet,"fieldName","value"),g);F(Vo(n.vtp_contentGroup,"index","group"),k);F(Vo(n.vtp_dimension,"index","dimension"),l);F(Vo(n.vtp_metric,"index","metric"),m);e.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var r=F(n);e=F(e,r)}F(Vo(e.vtp_fieldsToSet,
"fieldName","value"),g);F(Vo(e.vtp_contentGroup,"index","group"),k);F(Vo(e.vtp_dimension,"index","dimension"),l);F(Vo(e.vtp_metric,"index","metric"),m);var t=Ej(e.vtp_functionName);if(Da(t)){var q="",u="";e.vtp_setTrackerName&&"string"==typeof e.vtp_trackerName?""!==e.vtp_trackerName&&(u=e.vtp_trackerName,q=u+"."):(u="gtm"+cg(),
q=u+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,
allowAdFeatures:!0,allowAdPersonalizationSignals:!0},x=function(P){var S=[].slice.call(arguments,0);S[0]=q+S[0];t.apply(window,S)},y=function(P,S){return void 0===S?S:P(S)},A=function(P,S){if(S)for(var Za in S)S.hasOwnProperty(Za)&&x("set",P+Za,S[Za])},B=function(){},
z=function(P,S,Za){var fc=0;if(P)for(var Ma in P)if(P.hasOwnProperty(Ma)&&(Za&&v[Ma]||!Za&&void 0===v[Ma])){var ob=w[Ma]?Pa(P[Ma]):P[Ma];"anonymizeIp"!=Ma||ob||(ob=void 0);S[Ma]=ob;fc++}return fc},E={name:u};z(g,E,!0);t("create",e.vtp_trackingId||f.trackingId,E);x("set","&gtm",qk(!0));e.vtp_enableRecaptcha&&x("require","recaptcha","recaptcha.js");(function(P,S){void 0!==e[S]&&x("set",P,e[S])})("nonInteraction","vtp_nonInteraction");A("contentGroup",k);A("dimension",l);A("metric",m);var H={};z(g,H,!1)&&x("set",H);var M;
e.vtp_enableLinkId&&x("require","linkid","linkid.js");x("set","hitCallback",function(){var P=g&&g.hitCallback;Da(P)&&P();e.vtp_gtmOnSuccess()});if("TRACK_EVENT"==e.vtp_trackType){e.vtp_enableEcommerce&&(x("require","ec","ec.js"),B());var O={hitType:"event",eventCategory:String(e.vtp_eventCategory||f.category),eventAction:String(e.vtp_eventAction||f.action),eventLabel:y(String,e.vtp_eventLabel||f.label),eventValue:y(Oa,e.vtp_eventValue||
f.value)};z(M,O,!1);x("send",O);}else if("TRACK_SOCIAL"==e.vtp_trackType){}else if("TRACK_TRANSACTION"==e.vtp_trackType){}else if("TRACK_TIMING"==
e.vtp_trackType){}else if("DECORATE_LINK"==e.vtp_trackType){}else if("DECORATE_FORM"==e.vtp_trackType){}else if("TRACK_DATA"==e.vtp_trackType){}else{e.vtp_enableEcommerce&&(x("require","ec","ec.js"),B());if(e.vtp_doubleClick||"DISPLAY_FEATURES"==e.vtp_advertisingFeaturesType){var Y=
"_dc_gtm_"+String(e.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","displayfeatures",void 0,{cookieName:Y})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==e.vtp_advertisingFeaturesType){var ta="_dc_gtm_"+String(e.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","adfeatures",{cookieName:ta})}M?x("send","pageview",M):x("send","pageview");}if(!a){var Ba=e.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";e.vtp_useInternalVersion&&!e.vtp_useDebugVersion&&(Ba="internal/"+Ba);a=!0;var Ta=ck(g._x_19,"/analytics.js"),pa=Q("https:","http:","//www.google-analytics.com/"+Ba,g&&g.forceSSL);R("analytics.js"===Ba&&Ta?Ta:pa,function(){var P=Cj();P&&P.loaded||e.vtp_gtmOnFailure();},e.vtp_gtmOnFailure)}}else K(e.vtp_gtmOnFailure)};
Z.__ua=c;Z.__ua.g="ua";Z.__ua.h=!0;Z.__ua.priorityOverride=0}();

Z.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.g="inject_script";Z.__inject_script.h=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!p(f))throw d(e,{},"Script URL must be a string.");try{if(je(Vg(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},K:a}})}();


Z.b.opt=["google"],function(){var a,b=function(c){var d={};if(c.vtp_gaSettings){var e=c.vtp_gaSettings;F(Vo(e.vtp_fieldsToSet,"fieldName","value"),d);c.vtp_gaSettings=null;e.vtp_fieldsToSet=void 0;var f=F(e);c=F(c,f)||{}}F(Vo(c.vtp_fieldsToSet,"fieldName","value"),d);var g=Ej(c.vtp_functionName);if(Da(g)){g.r=!0;var k="",l="";c.vtp_setTrackerName&&"string"===typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(l=c.vtp_trackerName,k=l+"."):(l="gtm"+cg(),k=l+".");var m={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},n={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0},r=function(x,y,A){var B=0,z;for(z in x)if(x.hasOwnProperty(z)&&
(A&&m[z]||!A&&void 0===m[z])){var E=n[z]?Pa(x[z]):x[z];"anonymizeIp"!==z||E||(E=void 0);y[z]=E;B++}return B},t={name:l};r(d,t,!0);var q={"&gtm":qk(!0)};r(d,q,!1);var u=encodeURI(Q("https:","http:","//www.google-analytics.com/"+(c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js"),!!d.forceSSL));g("create",c.vtp_trackingId,t);g(k+"set",q);g(k+"require",c.vtp_optimizeContainerId,{dataLayer:"dataLayer"});g(c.vtp_gtmOnSuccess);g(k+"require","render");a||(a=!0,R(u,function(){return Cj().loaded||
c.vtp_gtmOnFailure()},c.vtp_gtmOnFailure));var v=U("dataLayer"),w=v&&v.hide;w&&w.end&&(w[c.vtp_optimizeContainerId]=!0)}else K(c.vtp_gtmOnFailure)};Z.__opt=b;Z.__opt.g="opt";Z.__opt.h=!0;Z.__opt.priorityOverride=0}();



Z.b.aev=["google"],function(){function a(q,u){var v=Kg(q,"gtm");if(v)return v[u]}function b(q,u,v,w){w||(w="element");var x=q+"."+u,y;if(n.hasOwnProperty(x))y=n[x];else{var A=a(q,w);if(A&&(y=v(A),n[x]=y,r.push(x),35<r.length)){var B=r.shift();delete n[B]}}return y}function c(q,u,v){var w=a(q,t[u]);return void 0!==w?w:v}function d(q,u){if(!q)return!1;var v=e(bo());Fa(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var w=[v],x=0;x<u.length;x++)if(u[x]instanceof RegExp){if(u[x].test(q))return!1}else{var y=
u[x];if(0!=y.length){if(0<=e(q).indexOf(y))return!1;w.push(e(y))}}return!Uo(q,w)}function e(q){m.test(q)||(q="http://"+q);return Tg(Vg(q),"HOST",!0)}function f(q,u,v){switch(q){case "SUBMIT_TEXT":return b(u,"FORM."+q,g,"formSubmitElement")||v;case "LENGTH":var w=b(u,"FORM."+q,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var x=a(u,"interactedFormFieldPosition");
return void 0===x?v:x;case "INTERACT_SEQUENCE_NUMBER":var y=a(u,"interactSequenceNumber");return void 0===y?v:y;default:return v}}function g(q){switch(q.tagName.toLowerCase()){case "input":return Ye(q,"value");case "button":return Ze(q);default:return null}}function k(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var u=0,v=0;v<q.elements.length;v++)An(q.elements[v])&&u++;return u}}function l(q,u,v){var w=a(q,"interactedFormField");return w&&Ye(w,u)||v}var m=/^https?:\/\//i,n={},r=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Z.__aev=q;Z.__aev.g="aev";Z.__aev.h=!0;Z.__aev.priorityOverride=0})(function(q){var u=q.vtp_gtmEventId,v=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var x=a(u,"element");return x&&x.tagName||
v;case "TEXT":return b(u,w,Ze)||v;case "URL":var y;a:{var A=String(a(u,"elementUrl")||v||""),B=Vg(A),z=String(q.vtp_component||"URL");switch(z){case "URL":y=A;break a;case "IS_OUTBOUND":y=d(A,q.vtp_affiliatedDomains);break a;default:y=Tg(B,z,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return y;case "ATTRIBUTE":var E;if(void 0===q.vtp_attribute)E=c(u,w,v);else{var H=q.vtp_attribute,M=a(u,"element");E=M&&Ye(M,H)||v||""}return E;case "MD":var O=q.vtp_mdValue,ca=b(u,"MD",Mn);return O&&ca?Pn(ca,
O)||v:ca||v;case "FORM":return f(String(q.vtp_component||"SUBMIT_TEXT"),u,v);default:return c(u,w,v)}})}();
Z.b.gas=["google"],function(){function a(b,c,d){b.vtp_fieldsToSet=b.vtp_fieldsToSet||[];var e=b[c];void 0!==e&&(b.vtp_fieldsToSet.push({fieldName:d,value:e}),delete b[c])}(function(b){Z.__gas=b;Z.__gas.g="gas";Z.__gas.h=!0;Z.__gas.priorityOverride=0})(function(b){var c=F(b),d=c;d[td.za]=null;d[td.uf]=null;c=d;a(c,"vtp_cookieDomain","cookieDomain");return c})}();


Z.b.baut=["nonGoogleScripts"],function(){var a=!1,b=function(c){var d=c.vtp_uetqName||"uetq",e=U(d,[],!0);if("VARIABLE_REVENUE"==c.vtp_eventType)e.push({gv:c.vtp_goalValue}),c.vtp_gtmOnSuccess();else if("CUSTOM"==c.vtp_eventType){var f={},g=function(k,l){void 0!==c[k]&&(f[l]=c[k])};g("vtp_goalValue","gv");g("vtp_eventCategory","ec");g("vtp_eventAction","ea");g("vtp_eventLabel","el");g("vtp_eventValue","ev");e.push(f);c.vtp_gtmOnSuccess()}else if(a)c.vtp_gtmOnSuccess();else try{R("//bat.bing.com/bat.js",
function(){var k=Qo(U("UET"),{ti:c.vtp_tagId,q:e});C[d]=k;k.push("pageLoad");c.vtp_gtmOnSuccess()},c.vtp_gtmOnFailure),a=!0}catch(k){K(c.vtp_gtmOnFailure)}};Z.__baut=b;Z.__baut.g="baut";Z.__baut.h=!0;Z.__baut.priorityOverride=0}();





Z.b.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.g="paused";Z.__paused.h=!0;Z.__paused.priorityOverride=0})(function(a){K(a.vtp_gtmOnFailure)})}();
Z.b.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=I.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Re(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];k.firstChild;)r.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,r,l,g)()}else d.insertBefore(k,null),l()}else f()}catch(t){K(g)}}}var b=function(d,e,f){oj(function(){var g,k=Sf;k.postscribe||(k.postscribe=le);g=k.postscribe;var l={done:e},m=I.createElement("div");m.style.display="none";m.style.visibility="hidden";I.body.appendChild(m);try{g(m,d,l)}catch(n){K(f)}})};var c=function(d){if(I.body){var e=
d.vtp_gtmOnFailure,f=oo(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.cd,k=f.D;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,k,e):a(I.body,$e(g),k,e)()}else ao(function(){c(d)},
200)};Z.__html=c;Z.__html.g="html";Z.__html.h=!0;Z.__html.priorityOverride=0}();






Z.b.lcl=[],function(){function a(){var c=U("document"),d=0,e=function(f){var g=f.target;if(g&&3!==f.which&&!(f.$g||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;g=af(g,["a","area"],100);if(!g)return f.returnValue;var k=f.defaultPrevented||!1===f.returnValue,l=xn("lcl",k?"nv.mwt":"mwt",0),m;m=k?xn("lcl","nv.ids",[]):xn("lcl","ids",[]);if(m.length){var n=tn(g,"gtm.linkClick",m);if(b(f,g,c)&&!k&&l&&g.href){var r=String(no(g,"rel")||""),t=!!Ha(r.split(" "),function(v){return"noreferrer"===v.toLowerCase()});
t&&N("GTM",36);var q=U((no(g,"target")||"_self").substring(1)),u=!0;if(fo(n,jn(function(){var v;if(v=u&&q){var w;a:if(t){var x;try{x=new MouseEvent(f.type)}catch(y){if(!c.createEvent){w=!1;break a}x=c.createEvent("MouseEvents");x.initEvent(f.type,!0,!0)}x.$g=!0;f.target.dispatchEvent(x);w=!0}else w=!1;v=!w}v&&(q.location.href=no(g,"href"))}),l))u=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else fo(n,function(){},l||2E3);return!0}}};We(c,"click",e,!1);We(c,"auxclick",e,!1)}
function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=no(d,"href"),g=f.indexOf("#"),k=no(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===g)return!1;if(0<g){var l=eo(f),m=eo(e.location);return l!==m}return!0}(function(c){Z.__lcl=c;Z.__lcl.g="lcl";Z.__lcl.h=!0;Z.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);if(!f||
0>=f)f=2E3;var g=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(f,m)};wn("lcl","mwt",k,0);e||wn("lcl","nv.mwt",k,0)}var l=function(m){m.push(g);return m};wn("lcl","ids",l,[]);e||wn("lcl","nv.ids",l,[]);ko("lcl")||(a(),lo("lcl"));K(c.vtp_gtmOnSuccess)})}();
Z.b.evl=["google"],function(){function a(f,g){this.element=f;this.a=g}function b(){var f=Number(T("gtm.start"))||0;return(new Date).getTime()-f}function c(f,g,k,l){function m(){if(!Sn(f.target)){g.has(e.Qb)||g.set(e.Qb,""+b());g.has(e.Kc)||g.set(e.Kc,""+b());var r=0;g.has(e.Sb)&&(r=Number(g.get(e.Sb)));r+=100;g.set(e.Sb,""+r);if(r>=k){var t=tn(f.target,"gtm.elementVisibility",[g.a]),q=Rn(f.target);t["gtm.visibleRatio"]=Math.round(1E3*q)/10;t["gtm.visibleTime"]=k;t["gtm.visibleFirstTime"]=Number(g.get(e.Kc));
t["gtm.visibleLastTime"]=Number(g.get(e.Qb));fo(t);l()}}}if(!g.has(e.hb)&&(0==k&&m(),!g.has(e.La))){var n=U("self").setInterval(m,100);g.set(e.hb,n)}}function d(f){f.has(e.hb)&&(U("self").clearInterval(Number(f.get(e.hb))),f.i(e.hb))}var e={hb:"polling-id-",Kc:"first-on-screen-",Qb:"recent-on-screen-",Sb:"total-visible-time-",La:"has-fired-"};a.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.a)};a.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.a)};a.prototype.set=function(f,g){this.element.setAttribute("data-gtm-vis-"+f+this.a,g)};a.prototype.i=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.a)};(function(f){Z.__evl=f;Z.__evl.g="evl";Z.__evl.h=!0;Z.__evl.priorityOverride=0})(function(f){function g(){var x=!1,y=null;if("CSS"===l){try{y=Bf(m)}catch(H){}x=!!y&&v.length!=y.length}else if("ID"===l){var A=I.getElementById(m);A&&(y=[A],x=1!=v.length||v[0]!==A)}y||(y=[],x=0<v.length);if(x){for(var B=0;B<v.length;B++){var z=
new a(v[B],q);d(z)}v=[];for(var E=0;E<y.length;E++)v.push(y[E]);0<=w&&Yn(w);0<v.length&&(w=Xn(k,v,[t]))}}function k(x){var y=new a(x.target,q);x.intersectionRatio>=t?y.has(e.La)||c(x,y,r,"ONCE"===u?function(){for(var A=0;A<v.length;A++){var B=new a(v[A],q);B.set(e.La,"1");d(B)}Yn(w);if(n&&En)for(var z=0;z<En.length;z++)En[z]===g&&En.splice(z,1)}:function(){y.set(e.La,"1");d(y)}):(d(y),"MANY_PER_ELEMENT"===u&&y.has(e.La)&&(y.i(e.La),y.i(e.Sb)),y.i(e.Qb))}var l=f.vtp_selectorType,m;"ID"===l?m=String(f.vtp_elementId):
"CSS"===l&&(m=String(f.vtp_elementSelector));var n=!!f.vtp_useDomChangeListener,r=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,t=(Number(f.vtp_onScreenRatio)||50)/100,q=f.vtp_uniqueTriggerId,u=f.vtp_firingFrequency,v=[],w=-1;g();n&&Fn(g);K(f.vtp_gtmOnSuccess)})}();


var Jq={};Jq.macro=function(a){if(qn.Qc.hasOwnProperty(a))return qn.Qc[a]},Jq.onHtmlSuccess=qn.xe(!0),Jq.onHtmlFailure=qn.xe(!1);Jq.dataLayer=Fg;Jq.callback=function(a){ag.hasOwnProperty(a)&&Da(ag[a])&&ag[a]();delete ag[a]};function Kq(){Sf[Hd.w]=Jq;Wa(bg,Z.b);ld=ld||qn;md=fj}
function Lq(){Yg.gtm_3pds=!0;Sf=C.google_tag_manager=C.google_tag_manager||{};if(Sf[Hd.w]){var a=Sf.zones;a&&a.unregisterChild(Hd.w);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)ed.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)hd.push(e[f]);for(var g=b.predicates||[],k=0;k<g.length;k++)gd.push(g[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],r={},t=0;t<n.length;t++)r[n[t][0]]=Array.prototype.slice.call(n[t],1);fd.push(r)}jd=Z;kd=Oo;var q=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;qm();Ld=new Kd(q);if(void 0!==
u)for(var w=["sandboxedScripts"],x=0;x<u.length;x++){var y=u[x].replace(/^_*/,"");bg[y]=w}tm(v);Kq();pn();jj=!1;kj=0;if("interactive"==I.readyState&&!I.createEventObject||"complete"==I.readyState)mj();else{We(I,"DOMContentLoaded",mj);We(I,"readystatechange",mj);if(I.createEventObject&&I.documentElement.doScroll){var A=!0;try{A=!C.frameElement}catch(H){}A&&nj()}We(C,"load",mj)}Lm=!1;"complete"===I.readyState?Nm():We(C,"load",Nm);a:{if(!ug)break a;C.setInterval(vg,864E5);}
Yf=(new Date).getTime();}}
(function(a){
a()})(Lq);

})()
