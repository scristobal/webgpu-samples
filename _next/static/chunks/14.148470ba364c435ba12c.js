(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{OI48:function(e,n,t){"use strict";n.a="[[stage(fragment)]]\nfn main() -> [[location(0)]] vec4<f32> {\n  return vec4<f32>(1.0, 0.0, 0.0, 1.0);\n}"},RkKu:function(e,n,t){"use strict";t.r(n),n.default="@keyframes animated-size {\n  0% {\n    width: 10px;\n    height: 600px;\n  }\n  50% {\n    width: 100%;\n    height: 600px;\n  }\n  100% {\n    width: 10px;\n    height: 600px;\n  }\n}\n\n.animatedCanvasSize {\n  animation-duration: 3s;\n  animation-iteration-count: infinite;\n  animation-name: animated-size;\n  animation-timing-function: ease;\n}"},WsHf:function(e,n,t){e.exports={animatedCanvasSize:"animatedCanvasSize_animatedCanvasSize__1QN6P","animated-size":"animatedCanvasSize_animated-size__IZ3q6"}},"l+hO":function(e,n,t){"use strict";t.r(n),function(e,a){var r=t("o0o1"),i=t.n(r),s=t("HaE+"),o=t("8i9l"),c=t("nBne"),d=t("OI48"),u=t("WsHf"),m=t.n(u),l=function(){var e=Object(s.a)(i.a.mark((function e(n){var t,a,r,s,o,u,l,p,f,v,g,h;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h=function(){if(t.current){t.current.clientWidth===l[0]&&t.current.clientHeight===l[1]||(void 0!==v&&v.destroy(),l[0]=t.current.clientWidth,l[1]=t.current.clientHeight,s.configure({device:r,format:o,size:l}),v=r.createTexture({size:l,sampleCount:p,format:o,usage:GPUTextureUsage.RENDER_ATTACHMENT}),g=v.createView());var e=r.createCommandEncoder(),n={colorAttachments:[{view:g,resolveTarget:s.getCurrentTexture().createView(),loadValue:{r:.2,g:.2,b:.2,a:1},storeOp:"store"}]},a=e.beginRenderPass(n);a.setPipeline(f),a.draw(3,1,0,0),a.endPass(),r.queue.submit([e.finish()]),requestAnimationFrame(h)}},t=n.canvasRef,e.next=4,navigator.gpu.requestAdapter();case 4:return a=e.sent,e.next=7,a.requestDevice();case 7:if(r=e.sent,null!==t.current){e.next=10;break}return e.abrupt("return");case 10:s=t.current.getContext("webgpu"),o=s.getPreferredFormat(a),u=window.devicePixelRatio||1,l=[t.current.clientWidth*u,t.current.clientHeight*u],s.configure({device:r,format:o,size:l}),p=4,f=r.createRenderPipeline({vertex:{module:r.createShaderModule({code:c.a}),entryPoint:"main"},fragment:{module:r.createShaderModule({code:d.a}),entryPoint:"main",targets:[{format:o}]},primitive:{topology:"triangle-list"},multisample:{count:4}}),v=void 0,t.current.classList.add(m.a.animatedCanvasSize),requestAnimationFrame(h);case 20:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();n.default=function(){return Object(o.a)({name:"Resize Canvas",description:"Shows multisampled rendering a basic triangle on a dynamically sized canvas.",init:l,sources:[{name:e.substr(a.length+1),contents:"import { makeSample, SampleInit } from '../../components/SampleLayout';\n\nimport triangleVertWGSL from '../../shaders/triangle.vert.wgsl';\nimport redFragWGSL from '../../shaders/red.frag.wgsl';\n\nimport styles from './animatedCanvasSize.module.css';\n\nconst init: SampleInit = async ({ canvasRef }) => {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n\n  if (canvasRef.current === null) return;\n  const context = canvasRef.current.getContext('webgpu');\n\n  const presentationFormat = context.getPreferredFormat(adapter);\n\n  const devicePixelRatio = window.devicePixelRatio || 1;\n  const presentationSize = [\n    canvasRef.current.clientWidth * devicePixelRatio,\n    canvasRef.current.clientHeight * devicePixelRatio,\n  ];\n\n  context.configure({\n    device,\n    format: presentationFormat,\n    size: presentationSize,\n  });\n\n  const sampleCount = 4;\n\n  const pipeline = device.createRenderPipeline({\n    vertex: {\n      module: device.createShaderModule({\n        code: triangleVertWGSL,\n      }),\n      entryPoint: 'main',\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: redFragWGSL,\n      }),\n      entryPoint: 'main',\n      targets: [\n        {\n          format: presentationFormat,\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n    },\n    multisample: {\n      count: 4,\n    },\n  });\n\n  let renderTarget: GPUTexture | undefined = undefined;\n  let renderTargetView: GPUTextureView;\n\n  canvasRef.current.classList.add(styles.animatedCanvasSize);\n\n  function frame() {\n    // Sample is no longer the active page.\n    if (!canvasRef.current) return;\n\n    // The canvas size is animating via CSS.\n    // When the size changes, we need to reallocate the render target.\n    // We also need to set the physical size of the canvas to match the computed CSS size.\n    if (\n      canvasRef.current.clientWidth !== presentationSize[0] ||\n      canvasRef.current.clientHeight !== presentationSize[1]\n    ) {\n      if (renderTarget !== undefined) {\n        // Destroy the previous render target\n        renderTarget.destroy();\n      }\n\n      presentationSize[0] = canvasRef.current.clientWidth;\n      presentationSize[1] = canvasRef.current.clientHeight;\n\n      // Reconfigure the canvas size.\n      context.configure({\n        device,\n        format: presentationFormat,\n        size: presentationSize,\n      });\n\n      renderTarget = device.createTexture({\n        size: presentationSize,\n        sampleCount,\n        format: presentationFormat,\n        usage: GPUTextureUsage.RENDER_ATTACHMENT,\n      });\n\n      renderTargetView = renderTarget.createView();\n    }\n\n    const commandEncoder = device.createCommandEncoder();\n\n    const renderPassDescriptor: GPURenderPassDescriptor = {\n      colorAttachments: [\n        {\n          view: renderTargetView,\n          resolveTarget: context.getCurrentTexture().createView(),\n          loadValue: { r: 0.2, g: 0.2, b: 0.2, a: 1.0 },\n          storeOp: 'store',\n        },\n      ],\n    };\n\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.draw(3, 1, 0, 0);\n    passEncoder.endPass();\n\n    device.queue.submit([commandEncoder.finish()]);\n    requestAnimationFrame(frame);\n  }\n\n  requestAnimationFrame(frame);\n};\n\nconst ResizeCanvas: () => JSX.Element = () =>\n  makeSample({\n    name: 'Resize Canvas',\n    description:\n      'Shows multisampled rendering a basic triangle on a dynamically sized canvas.',\n    init,\n    sources: [\n      {\n        name: __filename.substr(__dirname.length + 1),\n        contents: __SOURCE__,\n      },\n      {\n        name: '../../shaders/triangle.vert.wgsl',\n        contents: triangleVertWGSL,\n        editable: true,\n      },\n      {\n        name: '../../shaders/red.frag.wgsl',\n        contents: redFragWGSL,\n        editable: true,\n      },\n      {\n        name: './animatedCanvasSize.module.css',\n        // eslint-disable-next-line @typescript-eslint/no-var-requires\n        contents: require('!!raw-loader!./animatedCanvasSize.module.css')\n          .default,\n      },\n    ],\n    filename: __filename,\n  });\n\nexport default ResizeCanvas;\n"},{name:"../../shaders/triangle.vert.wgsl",contents:c.a,editable:!0},{name:"../../shaders/red.frag.wgsl",contents:d.a,editable:!0},{name:"./animatedCanvasSize.module.css",contents:t("RkKu").default}],filename:e})}}.call(this,"src/sample/resizeCanvas/main.ts","src/sample/resizeCanvas")},nBne:function(e,n,t){"use strict";n.a="[[stage(vertex)]]\nfn main([[builtin(vertex_index)]] VertexIndex : u32)\n     -> [[builtin(position)]] vec4<f32> {\n  var pos = array<vec2<f32>, 3>(\n      vec2<f32>(0.0, 0.5),\n      vec2<f32>(-0.5, -0.5),\n      vec2<f32>(0.5, -0.5));\n\n  return vec4<f32>(pos[VertexIndex], 0.0, 1.0);\n}\n"}}]);