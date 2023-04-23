(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{428:function(t,r,e){"use strict";e.r(r);var a=e(0),s=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("介绍")]),t._v(" "),r("p",[t._v("defineProperty和proxy区别"),r("br")])]),t._v(" "),r("p",[t._v("不同点:\n监听方式\ndefineProperty\nproxy\n对象新增属性\n对象删除属性\n数组的监听\n如果用defineProperty监听数组\nproxy 监听方式\n性能\n相同点\n都不支持嵌套")]),t._v(" "),r("h2",{attrs:{id:"不同点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#不同点"}},[t._v("#")]),t._v(" 不同点")]),t._v(" "),r("h2",{attrs:{id:"_1-监听方式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-监听方式"}},[t._v("#")]),t._v(" 1 监听方式")]),t._v(" "),r("h3",{attrs:{id:"defineproperty"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#defineproperty"}},[t._v("#")]),t._v(" defineProperty")]),t._v(" "),r("p",[t._v("defineProperty 只能劫持对象的某一个属性，不能对整个对象进行劫持，如果需要监听某一个对象的所有属性，需要遍历对象的所有属性并对其进行劫持来进行监听")]),t._v(" "),r("h3",{attrs:{id:"proxy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#proxy"}},[t._v("#")]),t._v(" proxy")]),t._v(" "),r("p",[t._v("设置代理对象的属性后，原始对象和代理对象都发生了变化，但是获取原始对象的属性不会触发 getter ，只有访问代理对象的属性才能触发 getter，但是触发了 getter 和 setter 都是去给原始对象获取属性值和设置属性值，因为这里的 target 就是这个原始对象。")]),t._v(" "),r("h2",{attrs:{id:"_2-对象新增属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-对象新增属性"}},[t._v("#")]),t._v(" 2 对象新增属性")]),t._v(" "),r("p",[t._v("当对象新增属性的时候，defineProperty 没有对新增的属性进行劫持，自然就不会监听到对象新增的属性变化，而proxy 是对对象进行代理，自然就能监听到对象属性的新增")]),t._v(" "),r("h2",{attrs:{id:"_3-对象删除属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-对象删除属性"}},[t._v("#")]),t._v(" 3 对象删除属性")]),t._v(" "),r("p",[t._v("proxy 有专门针对属性删除的方法 deleteProperty，可以在对象属性被删除时触发")]),t._v(" "),r("h2",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结:")]),t._v(" "),r("ul",[r("li",[t._v("1 Proxy使用上比Object.defineProperty方便的多。")]),t._v(" "),r("li",[t._v("2 Proxy代理整个对象，Object.defineProperty只代理对象上的某个属性。")]),t._v(" "),r("li",[t._v("3 如果对象内部要全部递归代理，则Proxy可以只在调用时递归，而Object.defineProperty需要在一开始就全部递归，Proxy性能优于Object。")]),t._v(" "),r("li",[t._v("4 对象上定义新属性时，Proxy可以监听到，Object.defineProperty监听不到。")]),t._v(" "),r("li",[t._v("5 数组新增删除修改时，Proxy可以监听到，Object.defineProperty监听不到。")]),t._v(" "),r("li",[t._v("6 Proxy不兼容IE，Object.defineProperty不兼容IE8及以下。")])])])}),[],!1,null,null,null);r.default=s.exports}}]);