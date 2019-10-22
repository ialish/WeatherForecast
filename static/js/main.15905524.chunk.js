(window["webpackJsonpcity-weather"]=window["webpackJsonpcity-weather"]||[]).push([[0],{129:function(e,t,a){e.exports=a(312)},134:function(e,t,a){},139:function(e,t,a){},28:function(e,t,a){e.exports=a.p+"static/media/HeartHollow.4ed65843.svg"},305:function(e,t,a){},306:function(e,t,a){},307:function(e,t,a){},308:function(e,t,a){},309:function(e,t,a){},310:function(e,t,a){},311:function(e,t,a){},312:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),i=(a(134),a(9)),s=a(10),u=a(13),l=a(11),E=a(14),h=a(12),d=(a(139),a(316)),p=function(e){var t=e.onRouteChange,a=e.route;return r.a.createElement(d.a,{className:"justify-content-end nav-bar",defaultActiveKey:a},r.a.createElement(d.a.Item,null,r.a.createElement(d.a.Link,{eventKey:"home",onClick:function(){return t("home")}},"Home")),r.a.createElement(d.a.Item,null,r.a.createElement(d.a.Link,{eventKey:"favorites",onClick:function(){return t("favorites")}},"Favorites")))},f=a(75),m=a(128),y=a(317),v=function(e){var t=e.name,a=e.description,o=Object(n.useState)(!0),c=Object(m.a)(o,2),i=c[0],s=c[1];return r.a.createElement("div",null,r.a.createElement(y.a,{show:i,onClose:function(){return s(!i)}},r.a.createElement(y.a.Header,null,r.a.createElement("strong",{className:"mr-auto"},t)),r.a.createElement(y.a.Body,null,a)))},g="zaj3LmdKAWfHa5qLyj3M7h8e5OU76lBi",C=(a(305),Object(f.asyncContainer)(f.Typeahead)),S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).onChange=function(e){a.props.onLocationChange({key:e[0].Key,city:e[0].LocalizedName}),a.clearRequest()},a.clearRequest=function(){setTimeout(function(){return a.refs.SubjectTypeahead.getInstance().clear()},0)},a}return Object(E.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t,a=this.props,n=a.query,o=a.onInputChange,c=a.onSearch,i=a.isLoading,s=a.options,u=a.error;if(u)return e=r.a.createElement(v,{name:"Error: ".concat(u,"!"),description:"Failed to fetch data from the server."}),r.a.createElement("div",{className:"error-msg"},e);return n.match(/^[0-9a-zA-Z ]*$/)||(t=r.a.createElement(v,{name:"Error: Mistype!",description:"Only english letters are allowed."})),r.a.createElement("div",{className:"search-field"},r.a.createElement(C,{id:"AsyncTypeahead",ref:"SubjectTypeahead",placeholder:"Enter location",isLoading:i,labelKey:"LocalizedName",onInputChange:o,onSearch:c,options:s,onChange:this.onChange}),r.a.createElement("div",{className:"error-msg"},t))}}]),t}(r.a.Component),O=Object(h.b)(function(e){return{query:e.changeInput.query,isLoading:e.changeInput.isLoading,options:e.changeInput.options,error:e.changeInput.error}},function(e){return{onInputChange:function(t){return e(function(e){return{type:"UPDATE_INPUT;",payload:e}}(t))},onSearch:function(t){return e(function(e){return function(t){t({type:"REQUEST_SEARCH_OPTIONS_PENDING"});var a="https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=".concat(g,"&q=").concat(e);return fetch(a).then(function(e){return e.json()}).then(function(e){return t({type:"REQUEST_SEARCH_OPTIONS_SUCCESS",payload:e})}).catch(function(e){return t({type:"REQUEST_SEARCH_OPTIONS_FAILED",payload:e.message})})}}(t))}}})(S),T=(a(306),a(315)),R=a(49),_=(a(307),a(28)),N=a.n(_),I=a(51),b=a.n(I),D=a(314),F=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).handleHeartImage=function(){e.state.favCities&&(e.state.favCities.find(function(t){return t.key===e.props.location.key})?e.state.heartImage===N.a&&e.setState({heartImage:b.a}):e.state.heartImage===b.a&&e.setState({heartImage:N.a}))},e.addRemoveCity=function(){var t;if(t=e.state.favCities?Object(R.a)(e.state.favCities):[],e.state.heartImage===N.a)t.push(e.props.location),e.setState({heartImage:b.a,favCities:t});else{var a=t.findIndex(function(t){return t.key===e.props.location.key});t.splice(a,1),e.setState({heartImage:N.a,favCities:t})}},e.state={favCities:[],heartImage:N.a},e}return Object(E.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({favCities:JSON.parse(localStorage.getItem("Favorite Cities"))}),this.handleHeartImage()}},{key:"componentDidUpdate",value:function(){this.handleHeartImage(),localStorage.setItem("Favorite Cities",JSON.stringify(this.state.favCities))}},{key:"render",value:function(){return r.a.createElement("div",{className:"favorites-button"},r.a.createElement("img",{src:this.state.heartImage,alt:"Heart",width:"35px"}),r.a.createElement(D.a,{variant:"outline-danger",size:"sm",onClick:this.addRemoveCity},"Add to Favorites"))}}]),t}(n.Component),U=(a(308),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestCurrentWeather()}},{key:"componentDidUpdate",value:function(e){(e.location||{}).key!==this.props.location.key&&this.props.onRequestCurrentWeather()}},{key:"render",value:function(){var e,t=this.props,a=t.currentWeatherData,n=t.error;return n?(e=r.a.createElement(v,{name:"Error: ".concat(n,"!"),description:"Failed to fetch data from the server."}),r.a.createElement("div",{className:"error-msg"},e)):r.a.createElement("div",null,r.a.createElement("h5",{className:"city"},a.city),r.a.createElement("h6",null,Math.round(a.degreesC),"\xb0C"),r.a.createElement("h2",{className:"weather-text"},a.weatherText))}}]),t}(r.a.Component)),j=Object(h.b)(function(e){return{isPending:e.changeCurrentWeather.isPending,currentWeatherData:e.changeCurrentWeather.currentWeatherData,error:e.changeCurrentWeather.error}},function(e,t){return{onRequestCurrentWeather:function(){return e((a=t.location,function(e){e({type:"REQUEST_CURRENT_WEATHER_PENDING"});var t="https://dataservice.accuweather.com/currentconditions/v1/".concat(a.key,"?apikey=").concat(g);return fetch(t).then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_CURRENT_WEATHER_SUCCESS",payload:{city:a.city,degreesC:t[0].Temperature.Metric.Value,weatherText:t[0].WeatherText}})}).catch(function(t){return e({type:"REQUEST_CURRENT_WEATHER_FAILED",payload:t.message})})}));var a}}})(U),P=a(318),A=(a(309),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestFiveDayForecast()}},{key:"componentDidUpdate",value:function(e){(e.location||{}).key!==this.props.location.key&&this.props.onRequestFiveDayForecast()}},{key:"render",value:function(){var e,t=this.props,a=t.DailyForecasts,n=t.error,o=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];return n?(e=r.a.createElement(v,{name:"Error: ".concat(n,"!"),description:"Failed to fetch data from the server."}),r.a.createElement("div",{className:"error-msg"},e)):r.a.createElement("div",{className:"five-day-cards"},a.map(function(e,t){return r.a.createElement(P.a,{className:"five-day-card",key:t},r.a.createElement(P.a.Body,null,r.a.createElement(P.a.Title,{className:"five-day-card-title"},o[new Date(1e3*e.EpochDate).getDay()]),r.a.createElement(P.a.Subtitle,{className:"mb-2 five-day-card-subtitle"},Math.round((e.Temperature.Minimum.Value+e.Temperature.Maximum.Value)/2),"\xb0C")))}))}}]),t}(r.a.Component)),k=Object(h.b)(function(e){return{isPending:e.changeFiveDayForecast.isPending,DailyForecasts:e.changeFiveDayForecast.DailyForecasts,error:e.changeFiveDayForecast.error}},function(e,t){return{onRequestFiveDayForecast:function(){return e((a=t.location,function(e){e({type:"REQUEST_FIVE_DAY_FORECAST_PENDING"});var t="https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(a.key,"?apikey=").concat(g,"&metric=true");return fetch(t).then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_FIVE_DAY_FORECAST_SUCCESS",payload:t.DailyForecasts})}).catch(function(t){return e({type:"REQUEST_FIVE_DAY_FORECAST_FAILED",payload:t.message})})}));var a}}})(A),w=function(e){var t=e.location;return r.a.createElement("div",null,r.a.createElement(T.a,{className:"background-box",variant:"success"},r.a.createElement(F,{location:t}),r.a.createElement(j,{location:t}),r.a.createElement(k,{location:t})))},L=(a(310),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).handleOnClick=function(e){a.props.onLocationChange({key:e.location.key,city:e.location.city}),a.props.onRouteChange("home")},a}return Object(E.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("Favorite Cities"));e&&(this.props.clearData(),this.props.onRequestFavoritesCurrentConditions(e))}},{key:"render",value:function(){var e,t=this,a=this.props,n=a.favCitiesData,o=a.error;if(o)return e=r.a.createElement(v,{name:"Error: ".concat(o,"!"),description:"Failed to fetch data from the server."}),r.a.createElement("div",{className:"error-msg"},e);if(!n.length)return null;var c=n.map(function(e){return r.a.createElement(P.a,{className:"favorites-card",key:e.location.key},r.a.createElement(P.a.Body,null,r.a.createElement(P.a.Title,{className:"favorites-card-title",onClick:function(){return t.handleOnClick(e)}},e.location.city),r.a.createElement(P.a.Subtitle,{className:"mb-2 favorites-card-subtitle"},r.a.createElement("h3",null,e.degreesC,"\xb0C"),r.a.createElement("h6",null,e.weatherText))))});return r.a.createElement("div",{className:"favorites-cards"},c)}}]),t}(n.Component)),Q=Object(h.b)(function(e){return{isPending:e.updateFavorites.isPending,favCitiesData:e.updateFavorites.favCitiesData,error:e.updateFavorites.error}},function(e){return{clearData:function(){return e({type:"CLEAR_DATA",payload:[]})},onRequestFavoritesCurrentConditions:function(t){return e(function(e){return function(t){e.forEach(function(e){t({type:"REQUEST_FAVORITES_CURRENT_CONDITIONS_PENDING"});var a="https://dataservice.accuweather.com/currentconditions/v1/".concat(e.key,"?apikey=").concat(g);return fetch(a).then(function(e){return e.json()}).then(function(a){t({type:"REQUEST_FAVORITES_CURRENT_CONDITIONS_SUCCESS",payload:{location:e,degreesC:Math.round(a[0].Temperature.Metric.Value),weatherText:a[0].WeatherText}})}).catch(function(e){return t({type:"REQUEST_FAVORITES_CURRENT_CONDITIONS_FAILED",payload:e.message})})})}}(t))}}})(L),W=(a(311),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestCurrentPosition()}},{key:"render",value:function(){var e,t=this.props,a=t.route,n=t.onRouteChange,o=t.location,c=t.onLocationChange,i=t.error;return i?(e=r.a.createElement(v,{name:"Error: ".concat(i,"!"),description:"Failed to fetch data from the server."}),r.a.createElement("div",{className:"error-msg"},e)):r.a.createElement("div",null,r.a.createElement(p,{onRouteChange:n,route:a}),"home"===a?r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Weather Forecast"),r.a.createElement(O,{onLocationChange:c}),r.a.createElement(w,{location:o})):r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"My Favorites"),r.a.createElement(Q,{onLocationChange:c,onRouteChange:n})))}}]),t}(n.Component)),H=Object(h.b)(function(e){return{route:e.changeRoute.route,isPending:e.changeLocation.isPending,location:e.changeLocation.location,error:e.changeLocation.error}},function(e){return{onRouteChange:function(t){return e(function(e){return{type:"SET_ROUTE",payload:e}}(t))},onLocationChange:function(t){return e(function(e){return{type:"SET_LOCATION",payload:e}}(t))},onRequestCurrentPosition:function(){return e(function(e){e({type:"REQUEST_CURRENT_POSITION_PENDING"}),navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(t){var a=t.coords.latitude,n=t.coords.longitude,r="https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=".concat(g,"&q=").concat(a,"%2C").concat(n);return fetch(r).then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_CURRENT_POSITION_SUCCESS",payload:{key:t.Key,city:t.LocalizedName}})}).catch(function(t){return e({type:"REQUEST_CURRENT_POSITION_FAILED",payload:t.message})})})})}}})(W);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=a(27),M=a(125),V=a(126),x=a(127);function G(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function K(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?G(a,!0).forEach(function(t){Object(x.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):G(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var z={route:"home"},B={isPending:!1,location:{key:"215854",city:"Tel Aviv"},error:""},Y={query:"",isLoading:!1,options:[],error:""},J={isPending:!1,currentWeatherData:{city:"",degreesC:null,weatherText:""},error:""},$={isPending:!1,DailyForecasts:[],error:""},Z={isPending:!1,favCitiesData:[],error:""},X=Object(V.createLogger)(),ee=Object(q.c)({changeRoute:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ROUTE":return K({},e,{},{route:t.payload});default:return e}},changeLocation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOCATION":return K({},e,{},{location:t.payload});case"REQUEST_CURRENT_POSITION_PENDING":return K({},e,{},{isPending:!0});case"REQUEST_CURRENT_POSITION_SUCCESS":return K({},e,{},{location:t.payload,isPending:!1});case"REQUEST_CURRENT_POSITION_FAILED":return K({},e,{},{error:t.payload,isPending:!1});default:return e}},changeInput:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_INPUT;":return K({},e,{},{query:t.payload});case"REQUEST_SEARCH_OPTIONS_PENDING":return K({},e,{},{isLoading:!0});case"REQUEST_SEARCH_OPTIONS_SUCCESS":return K({},e,{},{options:t.payload,isLoading:!1});case"REQUEST_SEARCH_OPTIONS_FAILED":return K({},e,{},{error:t.payload,isLoading:!1});default:return e}},changeCurrentWeather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_CURRENT_WEATHER_PENDING":return K({},e,{},{isPending:!0});case"REQUEST_CURRENT_WEATHER_SUCCESS":return K({},e,{},{currentWeatherData:t.payload,isPending:!1});case"REQUEST_CURRENT_WEATHER_FAILED":return K({},e,{},{error:t.payload,isPending:!1});default:return e}},changeFiveDayForecast:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_FIVE_DAY_FORECAST_PENDING":return K({},e,{},{isPending:!0});case"REQUEST_FIVE_DAY_FORECAST_SUCCESS":return K({},e,{},{DailyForecasts:t.payload,isPending:!1});case"REQUEST_FIVE_DAY_FORECAST_FAILED":return K({},e,{},{error:t.payload,isPending:!1});default:return e}},updateFavorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLEAR_DATA":return K({},e,{},{favCitiesData:[]});case"REQUEST_FAVORITES_CURRENT_CONDITIONS_PENDING":return K({},e,{},{isPending:!0});case"REQUEST_FAVORITES_CURRENT_CONDITIONS_SUCCESS":return K({},e,{},{favCitiesData:[].concat(Object(R.a)(e.favCitiesData),[t.payload]),isPending:!1});case"REQUEST_FAVORITES_CURRENT_CONDITIONS_FAILED":return K({},e,{},{error:t.payload,isPending:!1});default:return e}}}),te=Object(q.d)(ee,Object(q.a)(M.a,X));c.a.render(r.a.createElement(h.a,{store:te},r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},51:function(e,t,a){e.exports=a.p+"static/media/HeartFull.efb08012.svg"}},[[129,1,2]]]);
//# sourceMappingURL=main.15905524.chunk.js.map