_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"5uvS":function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/samples/animometer",function(){return t("TRwa")}])},TRwa:function(n,e,t){"use strict";t.r(e);var o=t("o0o1"),r=t.n(o),a=t("rePB"),i=t("HaE+"),s=t("SoUo"),f=t("PpzT");function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){Object(a.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(){return(u=Object(i.a)(r.a.mark((function n(e,t,o){var a,i,s,c,u,p,g,v,y,E,T,B,b,h,P,x,S,_,w,L,G,M,A,O,U,R,F;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return G=function(){for(var n=c.numTriangles,e=5*Float32Array.BYTES_PER_ELEMENT,t=256*Math.ceil(e/256),o=t/Float32Array.BYTES_PER_ELEMENT,r=p.createBuffer({size:n*t+Float32Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM}),a=new Float32Array(n*o),i=new Array(n),s=0;s<n;++s)a[o*s+0]=.2*Math.random()+.2,a[o*s+1]=1.8*(Math.random()-.5),a[o*s+2]=1.8*(Math.random()-.5),a[o*s+3]=1.5*Math.random()+.5,a[o*s+4]=10*Math.random(),i[s]=p.createBindGroup({layout:B,entries:[{binding:0,resource:{buffer:r,offset:s*t,size:6*Float32Array.BYTES_PER_ELEMENT}}]});for(var f=p.createBindGroup({layout:b,entries:[{binding:0,resource:{buffer:r,offset:0,size:6*Float32Array.BYTES_PER_ELEMENT}}]}),l=n*t,u=p.createBindGroup({layout:T,entries:[{binding:0,resource:{buffer:r,offset:l,size:Float32Array.BYTES_PER_ELEMENT}}]}),d=14680064/Float32Array.BYTES_PER_ELEMENT,m=0;m<a.length;m+=d){var g=Math.min(a.length-m,d);p.queue.writeBuffer(r,m*Float32Array.BYTES_PER_ELEMENT,a.buffer,a.byteOffset+m*Float32Array.BYTES_PER_ELEMENT,g*Float32Array.BYTES_PER_ELEMENT)}function v(e){c.dynamicOffsets?e.setPipeline(w):e.setPipeline(_),e.setVertexBuffer(0,L),e.setBindGroup(0,u);for(var o=[0],r=0;r<n;++r)c.dynamicOffsets?(o[0]=r*t,e.setBindGroup(1,f,o)):e.setBindGroup(1,i[r]),e.draw(3,1,0,0)}var h=void 0,P=new Float32Array([0]),x={colorAttachments:[{attachment:void 0,loadValue:{r:0,g:0,b:0,a:1}}]},S=p.createRenderBundleEncoder({colorFormats:[y]});v(S);var G=S.finish();return function(n){void 0===h&&(h=n),P[0]=(n-h)/1e3,p.queue.writeBuffer(r,l,P.buffer),x.colorAttachments[0].attachment=E.getCurrentTexture().createView();var e=p.createCommandEncoder(),t=e.beginRenderPass(x);c.renderBundles?t.executeBundles([G]):v(t),t.endPass(),p.queue.submit([e.finish()])}},(a=document.createElement("div")).style.color="white",a.style.background="black",a.style.position="absolute",a.style.top="10px",a.style.left="10px",i=document.createElement("pre"),a.appendChild(i),e.parentNode.appendChild(a),s=new URLSearchParams(window.location.search),c={numTriangles:Number(s.get("numTriangles"))||2e4,renderBundles:Boolean(s.get("renderBundles")),dynamicOffsets:Boolean(s.get("dynamicOffsets"))},n.next=14,navigator.gpu.requestAdapter();case 14:return u=n.sent,n.next=17,u.requestDevice();case 17:return p=n.sent,n.next=20,Object(f.a)();case 20:return g=n.sent,v=e.getContext("gpupresent"),y="bgra8unorm",E=v.configureSwapChain({device:p,format:y,usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT}),T=p.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform",minBindingSize:4}}]}),B=p.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform",minBindingSize:20}}]}),b=p.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform",hasDynamicOffset:!0,minBindingSize:20}}]}),h=4*Float32Array.BYTES_PER_ELEMENT,P=p.createPipelineLayout({bindGroupLayouts:[T,B]}),x=p.createPipelineLayout({bindGroupLayouts:[T,b]}),S={vertex:{module:t?p.createShaderModule({code:m.vertex}):p.createShaderModule({code:d.vertex,transform:function(n){return g.compileGLSL(n,"vertex")}}),entryPoint:"main",buffers:[{arrayStride:2*h,stepMode:"vertex",attributes:[{shaderLocation:0,offset:0,format:"float32x4"},{shaderLocation:1,offset:h,format:"float32x4"}]}]},fragment:{module:t?p.createShaderModule({code:m.fragment}):p.createShaderModule({code:d.fragment,transform:function(n){return g.compileGLSL(n,"fragment")}}),entryPoint:"main",targets:[{format:y}]},primitive:{topology:"triangle-list",frontFace:"ccw",cullMode:"none"}},_=p.createRenderPipeline(l(l({},S),{},{layout:P})),w=p.createRenderPipeline(l(l({},S),{},{layout:x})),L=p.createBuffer({size:6*h,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(L.getMappedRange()).set([0,.1,0,1,1,0,0,1,-.1,-.1,0,1,0,1,0,1,.1,-.1,0,1,0,0,1,1]),L.unmap(),M=G(),A=function(){M=G()},o.add(c,"numTriangles",0,2e5).step(1).onFinishChange(A),o.add(c,"renderBundles"),o.add(c,"dynamicOffsets"),O=void 0,U=void 0,R=void 0,F=!0,n.abrupt("return",(function(n){var e=0;void 0!==O&&(e=n-O),O=n;var t=performance.now();M(n);var o=performance.now()-t;void 0===R&&(R=e),void 0===U&&(U=o);var r=.2;R=.8*R+r*e,U=.8*U+r*o,F&&(i.innerHTML="Avg Javascript: ".concat(U.toFixed(2)," ms\nAvg Frame: ").concat(R.toFixed(2)," ms"),F=!1,setTimeout((function(){F=!0}),100))}));case 46:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var d={vertex:"#version 450\n  layout(std140, set = 0, binding = 0) uniform Time {\n      float time;\n  };\n  layout(std140, set = 1, binding = 0) uniform Uniforms {\n      float scale;\n      float offsetX;\n      float offsetY;\n      float scalar;\n      float scalarOffset;\n  };\n\n  layout(location = 0) in vec4 position;\n  layout(location = 1) in vec4 color;\n\n  layout(location = 0) out vec4 v_color;\n\n  void main() {\n      float fade = mod(scalarOffset + time * scalar / 10.0, 1.0);\n      if (fade < 0.5) {\n          fade = fade * 2.0;\n      } else {\n          fade = (1.0 - fade) * 2.0;\n      }\n      float xpos = position.x * scale;\n      float ypos = position.y * scale;\n      float angle = 3.14159 * 2.0 * fade;\n      float xrot = xpos * cos(angle) - ypos * sin(angle);\n      float yrot = xpos * sin(angle) + ypos * cos(angle);\n      xpos = xrot + offsetX;\n      ypos = yrot + offsetY;\n      v_color = vec4(fade, 1.0 - fade, 0.0, 1.0) + color;\n      gl_Position = vec4(xpos, ypos, 0.0, 1.0);\n  }\n",fragment:"#version 450\n  layout(location = 0) in vec4 v_color;\n  layout(location = 0) out vec4 outColor;\n\n  void main() {\n      outColor = v_color;\n  }\n"},m={vertex:"\n[[block]] struct Time {\n  [[offset(0)]] value : f32;\n};\n\n[[block]] struct Uniforms {\n  [[offset(0)]] scale : f32;\n  [[offset(4)]] offsetX : f32;\n  [[offset(8)]] offsetY : f32;\n  [[offset(12)]] scalar : f32;\n  [[offset(16)]] scalarOffset : f32;\n};\n\n[[binding(0), group(0)]] var<uniform> time : Time;\n[[binding(0), group(1)]] var<uniform> uniforms : Uniforms;\n\n[[location(0)]] var<in> position : vec4<f32>;\n[[location(1)]] var<in> color : vec4<f32>;\n\n[[builtin(position)]] var<out> Position : vec4<f32>;\n[[location(0)]] var<out> v_color : vec4<f32>;\n\n[[stage(vertex)]]\nfn main() -> void {\n    var fade : f32 = (uniforms.scalarOffset + time.value * uniforms.scalar / 10.0) % 1.0;\n    if (fade < 0.5) {\n        fade = fade * 2.0;\n    } else {\n        fade = (1.0 - fade) * 2.0;\n    }\n    var xpos : f32 = position.x * uniforms.scale;\n    var ypos : f32 = position.y * uniforms.scale;\n    var angle : f32 = 3.14159 * 2.0 * fade;\n    var xrot : f32 = xpos * cos(angle) - ypos * sin(angle);\n    var yrot : f32 = xpos * sin(angle) + ypos * cos(angle);\n    xpos = xrot + uniforms.offsetX;\n    ypos = yrot + uniforms.offsetY;\n    v_color = vec4<f32>(fade, 1.0 - fade, 0.0, 1.0) + color;\n    Position = vec4<f32>(xpos, ypos, 0.0, 1.0);\n    return;\n}\n",fragment:"\n[[location(0)]] var<in> v_color : vec4<f32>;\n[[location(0)]] var<out> outColor : vec4<f32>;\n\n[[stage(fragment)]]\nfn main() -> void {\n  outColor = v_color;\n  return;\n}\n"};e.default=Object(s.a)({name:"Animometer",slug:"animometer",description:"A WebGPU of port of the Animometer MotionMark benchmark.",gui:!0,init:function(n,e,t){return u.apply(this,arguments)},wgslShaders:m,glslShaders:d,source:"import type { GUI } from 'dat.gui';\nimport { makeBasicExample } from '../../components/basicExample';\nimport glslangModule from '../../glslang';\n\nasync function init(canvas: HTMLCanvasElement, useWGSL: boolean, gui: GUI) {\n  const perfDisplayContainer = document.createElement('div');\n  perfDisplayContainer.style.color = 'white';\n  perfDisplayContainer.style.background = 'black';\n  perfDisplayContainer.style.position = 'absolute';\n  perfDisplayContainer.style.top = '10px';\n  perfDisplayContainer.style.left = '10px';\n\n  const perfDisplay = document.createElement('pre');\n  perfDisplayContainer.appendChild(perfDisplay);\n  canvas.parentNode.appendChild(perfDisplayContainer);\n\n  const params = new URLSearchParams(window.location.search);\n  const settings = {\n    numTriangles: Number(params.get('numTriangles')) || 20000,\n    renderBundles: Boolean(params.get('renderBundles')),\n    dynamicOffsets: Boolean(params.get('dynamicOffsets')),\n  };\n\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n  const glslang = await glslangModule();\n\n  const context = canvas.getContext('gpupresent');\n\n  const swapChainFormat = 'bgra8unorm';\n\n  const swapChain = context.configureSwapChain({\n    device,\n    format: swapChainFormat,\n    usage: GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,\n  });\n\n  const timeBindGroupLayout = device.createBindGroupLayout({\n    entries: [\n      {\n        binding: 0,\n        visibility: GPUShaderStage.VERTEX,\n        buffer: {\n          type: 'uniform',\n          minBindingSize: 4,\n        },\n      },\n    ],\n  });\n\n  const bindGroupLayout = device.createBindGroupLayout({\n    entries: [\n      {\n        binding: 0,\n        visibility: GPUShaderStage.VERTEX,\n        buffer: {\n          type: 'uniform',\n          minBindingSize: 20,\n        },\n      },\n    ],\n  });\n\n  const dynamicBindGroupLayout = device.createBindGroupLayout({\n    entries: [\n      {\n        binding: 0,\n        visibility: GPUShaderStage.VERTEX,\n        buffer: {\n          type: 'uniform',\n          hasDynamicOffset: true,\n          minBindingSize: 20,\n        },\n      },\n    ],\n  });\n\n  const vec4Size = 4 * Float32Array.BYTES_PER_ELEMENT;\n  const pipelineLayout = device.createPipelineLayout({\n    bindGroupLayouts: [timeBindGroupLayout, bindGroupLayout],\n  });\n  const dynamicPipelineLayout = device.createPipelineLayout({\n    bindGroupLayouts: [timeBindGroupLayout, dynamicBindGroupLayout],\n  });\n  const pipelineDesc: GPURenderPipelineDescriptor = {\n    vertex: {\n      module: useWGSL\n        ? device.createShaderModule({\n            code: wgslShaders.vertex,\n          })\n        : device.createShaderModule({\n            code: glslShaders.vertex,\n            transform: (glsl) => glslang.compileGLSL(glsl, 'vertex'),\n          }),\n      entryPoint: 'main',\n      buffers: [\n        {\n          // vertex buffer\n          arrayStride: 2 * vec4Size,\n          stepMode: 'vertex',\n          attributes: [\n            {\n              // vertex positions\n              shaderLocation: 0,\n              offset: 0,\n              format: 'float32x4',\n            },\n            {\n              // vertex colors\n              shaderLocation: 1,\n              offset: vec4Size,\n              format: 'float32x4',\n            },\n          ],\n        },\n      ],\n    },\n    fragment: {\n      module: useWGSL\n        ? device.createShaderModule({\n            code: wgslShaders.fragment,\n          })\n        : device.createShaderModule({\n            code: glslShaders.fragment,\n            transform: (glsl) => glslang.compileGLSL(glsl, 'fragment'),\n          }),\n      entryPoint: 'main',\n      targets: [\n        {\n          format: swapChainFormat,\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n      frontFace: 'ccw',\n      cullMode: 'none',\n    },\n  };\n\n  const pipeline = device.createRenderPipeline({\n    ...pipelineDesc,\n    layout: pipelineLayout,\n  });\n\n  const dynamicPipeline = device.createRenderPipeline({\n    ...pipelineDesc,\n    layout: dynamicPipelineLayout,\n  });\n\n  const vertexBuffer = device.createBuffer({\n    size: 2 * 3 * vec4Size,\n    usage: GPUBufferUsage.VERTEX,\n    mappedAtCreation: true,\n  });\n\n  // prettier-ignore\n  new Float32Array(vertexBuffer.getMappedRange()).set([\n    // position data  /**/ color data\n    0, 0.1, 0, 1,     /**/ 1, 0, 0, 1,\n    -0.1, -0.1, 0, 1, /**/ 0, 1, 0, 1,\n    0.1, -0.1, 0, 1,  /**/ 0, 0, 1, 1,\n  ]);\n  vertexBuffer.unmap();\n\n  function configure() {\n    const numTriangles = settings.numTriangles;\n    const uniformBytes = 5 * Float32Array.BYTES_PER_ELEMENT;\n    const alignedUniformBytes = Math.ceil(uniformBytes / 256) * 256;\n    const alignedUniformFloats =\n      alignedUniformBytes / Float32Array.BYTES_PER_ELEMENT;\n    const uniformBuffer = device.createBuffer({\n      size: numTriangles * alignedUniformBytes + Float32Array.BYTES_PER_ELEMENT,\n      usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.UNIFORM,\n    });\n    const uniformBufferData = new Float32Array(\n      numTriangles * alignedUniformFloats\n    );\n    const bindGroups = new Array(numTriangles);\n    for (let i = 0; i < numTriangles; ++i) {\n      uniformBufferData[alignedUniformFloats * i + 0] =\n        Math.random() * 0.2 + 0.2; // scale\n      uniformBufferData[alignedUniformFloats * i + 1] =\n        0.9 * 2 * (Math.random() - 0.5); // offsetX\n      uniformBufferData[alignedUniformFloats * i + 2] =\n        0.9 * 2 * (Math.random() - 0.5); // offsetY\n      uniformBufferData[alignedUniformFloats * i + 3] =\n        Math.random() * 1.5 + 0.5; // scalar\n      uniformBufferData[alignedUniformFloats * i + 4] = Math.random() * 10; // scalarOffset\n\n      bindGroups[i] = device.createBindGroup({\n        layout: bindGroupLayout,\n        entries: [\n          {\n            binding: 0,\n            resource: {\n              buffer: uniformBuffer,\n              offset: i * alignedUniformBytes,\n              size: 6 * Float32Array.BYTES_PER_ELEMENT,\n            },\n          },\n        ],\n      });\n    }\n\n    const dynamicBindGroup = device.createBindGroup({\n      layout: dynamicBindGroupLayout,\n      entries: [\n        {\n          binding: 0,\n          resource: {\n            buffer: uniformBuffer,\n            offset: 0,\n            size: 6 * Float32Array.BYTES_PER_ELEMENT,\n          },\n        },\n      ],\n    });\n\n    const timeOffset = numTriangles * alignedUniformBytes;\n    const timeBindGroup = device.createBindGroup({\n      layout: timeBindGroupLayout,\n      entries: [\n        {\n          binding: 0,\n          resource: {\n            buffer: uniformBuffer,\n            offset: timeOffset,\n            size: Float32Array.BYTES_PER_ELEMENT,\n          },\n        },\n      ],\n    });\n\n    // writeBuffer too large may OOM. TODO: The browser should internally chunk uploads.\n    const maxMappingLength =\n      (14 * 1024 * 1024) / Float32Array.BYTES_PER_ELEMENT;\n    for (\n      let offset = 0;\n      offset < uniformBufferData.length;\n      offset += maxMappingLength\n    ) {\n      const uploadCount = Math.min(\n        uniformBufferData.length - offset,\n        maxMappingLength\n      );\n\n      device.queue.writeBuffer(\n        uniformBuffer,\n        offset * Float32Array.BYTES_PER_ELEMENT,\n        uniformBufferData.buffer,\n        uniformBufferData.byteOffset + offset * Float32Array.BYTES_PER_ELEMENT,\n        uploadCount * Float32Array.BYTES_PER_ELEMENT\n      );\n    }\n\n    function recordRenderPass(\n      passEncoder: GPURenderBundleEncoder | GPURenderPassEncoder\n    ) {\n      if (settings.dynamicOffsets) {\n        passEncoder.setPipeline(dynamicPipeline);\n      } else {\n        passEncoder.setPipeline(pipeline);\n      }\n      passEncoder.setVertexBuffer(0, vertexBuffer);\n      passEncoder.setBindGroup(0, timeBindGroup);\n      const dynamicOffsets = [0];\n      for (let i = 0; i < numTriangles; ++i) {\n        if (settings.dynamicOffsets) {\n          dynamicOffsets[0] = i * alignedUniformBytes;\n          passEncoder.setBindGroup(1, dynamicBindGroup, dynamicOffsets);\n        } else {\n          passEncoder.setBindGroup(1, bindGroups[i]);\n        }\n        passEncoder.draw(3, 1, 0, 0);\n      }\n    }\n\n    let startTime = undefined;\n    const uniformTime = new Float32Array([0]);\n\n    const renderPassDescriptor: GPURenderPassDescriptor = {\n      colorAttachments: [\n        {\n          attachment: undefined, // Assigned later\n          loadValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },\n        },\n      ],\n    };\n\n    const renderBundleEncoder = device.createRenderBundleEncoder({\n      colorFormats: [swapChainFormat],\n    });\n    recordRenderPass(renderBundleEncoder);\n    const renderBundle = renderBundleEncoder.finish();\n\n    return function doDraw(timestamp) {\n      if (startTime === undefined) {\n        startTime = timestamp;\n      }\n      uniformTime[0] = (timestamp - startTime) / 1000;\n      device.queue.writeBuffer(uniformBuffer, timeOffset, uniformTime.buffer);\n\n      renderPassDescriptor.colorAttachments[0].attachment = swapChain\n        .getCurrentTexture()\n        .createView();\n\n      const commandEncoder = device.createCommandEncoder();\n      const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n\n      if (settings.renderBundles) {\n        passEncoder.executeBundles([renderBundle]);\n      } else {\n        recordRenderPass(passEncoder);\n      }\n\n      passEncoder.endPass();\n      device.queue.submit([commandEncoder.finish()]);\n    };\n  }\n\n  let doDraw = configure();\n\n  const updateSettings = () => {\n    doDraw = configure();\n  };\n  gui\n    .add(settings, 'numTriangles', 0, 200000)\n    .step(1)\n    .onFinishChange(updateSettings);\n  gui.add(settings, 'renderBundles');\n  gui.add(settings, 'dynamicOffsets');\n\n  let previousFrameTimestamp = undefined;\n  let jsTimeAvg = undefined;\n  let frameTimeAvg = undefined;\n  let updateDisplay = true;\n\n  return function frame(timestamp) {\n    let frameTime = 0;\n    if (previousFrameTimestamp !== undefined) {\n      frameTime = timestamp - previousFrameTimestamp;\n    }\n    previousFrameTimestamp = timestamp;\n\n    const start = performance.now();\n    doDraw(timestamp);\n    const jsTime = performance.now() - start;\n    if (frameTimeAvg === undefined) {\n      frameTimeAvg = frameTime;\n    }\n    if (jsTimeAvg === undefined) {\n      jsTimeAvg = jsTime;\n    }\n\n    const w = 0.2;\n    frameTimeAvg = (1 - w) * frameTimeAvg + w * frameTime;\n    jsTimeAvg = (1 - w) * jsTimeAvg + w * jsTime;\n\n    if (updateDisplay) {\n      perfDisplay.innerHTML = `Avg Javascript: ${jsTimeAvg.toFixed(\n        2\n      )} ms\\nAvg Frame: ${frameTimeAvg.toFixed(2)} ms`;\n      updateDisplay = false;\n      setTimeout(() => {\n        updateDisplay = true;\n      }, 100);\n    }\n  };\n}\n\nconst glslShaders = {\n  vertex: `#version 450\n  layout(std140, set = 0, binding = 0) uniform Time {\n      float time;\n  };\n  layout(std140, set = 1, binding = 0) uniform Uniforms {\n      float scale;\n      float offsetX;\n      float offsetY;\n      float scalar;\n      float scalarOffset;\n  };\n\n  layout(location = 0) in vec4 position;\n  layout(location = 1) in vec4 color;\n\n  layout(location = 0) out vec4 v_color;\n\n  void main() {\n      float fade = mod(scalarOffset + time * scalar / 10.0, 1.0);\n      if (fade < 0.5) {\n          fade = fade * 2.0;\n      } else {\n          fade = (1.0 - fade) * 2.0;\n      }\n      float xpos = position.x * scale;\n      float ypos = position.y * scale;\n      float angle = 3.14159 * 2.0 * fade;\n      float xrot = xpos * cos(angle) - ypos * sin(angle);\n      float yrot = xpos * sin(angle) + ypos * cos(angle);\n      xpos = xrot + offsetX;\n      ypos = yrot + offsetY;\n      v_color = vec4(fade, 1.0 - fade, 0.0, 1.0) + color;\n      gl_Position = vec4(xpos, ypos, 0.0, 1.0);\n  }\n`,\n\n  fragment: `#version 450\n  layout(location = 0) in vec4 v_color;\n  layout(location = 0) out vec4 outColor;\n\n  void main() {\n      outColor = v_color;\n  }\n`,\n};\n\nconst wgslShaders = {\n  vertex: `\n[[block]] struct Time {\n  [[offset(0)]] value : f32;\n};\n\n[[block]] struct Uniforms {\n  [[offset(0)]] scale : f32;\n  [[offset(4)]] offsetX : f32;\n  [[offset(8)]] offsetY : f32;\n  [[offset(12)]] scalar : f32;\n  [[offset(16)]] scalarOffset : f32;\n};\n\n[[binding(0), group(0)]] var<uniform> time : Time;\n[[binding(0), group(1)]] var<uniform> uniforms : Uniforms;\n\n[[location(0)]] var<in> position : vec4<f32>;\n[[location(1)]] var<in> color : vec4<f32>;\n\n[[builtin(position)]] var<out> Position : vec4<f32>;\n[[location(0)]] var<out> v_color : vec4<f32>;\n\n[[stage(vertex)]]\nfn main() -> void {\n    var fade : f32 = (uniforms.scalarOffset + time.value * uniforms.scalar / 10.0) % 1.0;\n    if (fade < 0.5) {\n        fade = fade * 2.0;\n    } else {\n        fade = (1.0 - fade) * 2.0;\n    }\n    var xpos : f32 = position.x * uniforms.scale;\n    var ypos : f32 = position.y * uniforms.scale;\n    var angle : f32 = 3.14159 * 2.0 * fade;\n    var xrot : f32 = xpos * cos(angle) - ypos * sin(angle);\n    var yrot : f32 = xpos * sin(angle) + ypos * cos(angle);\n    xpos = xrot + uniforms.offsetX;\n    ypos = yrot + uniforms.offsetY;\n    v_color = vec4<f32>(fade, 1.0 - fade, 0.0, 1.0) + color;\n    Position = vec4<f32>(xpos, ypos, 0.0, 1.0);\n    return;\n}\n`,\n\n  fragment: `\n[[location(0)]] var<in> v_color : vec4<f32>;\n[[location(0)]] var<out> outColor : vec4<f32>;\n\n[[stage(fragment)]]\nfn main() -> void {\n  outColor = v_color;\n  return;\n}\n`,\n};\n\nexport default makeBasicExample({\n  name: 'Animometer',\n  slug: 'animometer',\n  description: 'A WebGPU of port of the Animometer MotionMark benchmark.',\n  gui: true,\n  init,\n  wgslShaders,\n  glslShaders,\n  source: __SOURCE__,\n});\n"})}},[["5uvS",0,1,4,2,3]]]);