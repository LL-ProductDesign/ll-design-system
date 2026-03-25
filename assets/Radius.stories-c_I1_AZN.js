import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-C7v2YsCr.js";import{r as s}from"./tokens-D4qHVeFC.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"Foundations/Radius",parameters:{layout:"padded"},tags:["autodocs"]},i={fontFamily:"var(--font-family-base)",color:"var(--text-primary)"},n={name:"Primitives",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32,padding:"40px 0"},children:Object.entries(s).map(([r,a])=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:32},children:[e.jsx("div",{style:{width:120,height:64,borderRadius:a,background:"var(--background-secondary)",border:"1px solid var(--border-color-primary)",flexShrink:0}}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[e.jsxs("span",{style:{...i,fontSize:16,fontWeight:600},children:["border-radius-",r]}),e.jsxs("span",{style:{...i,fontSize:14,color:"var(--text-secondary)"},children:[a,"px"]})]})]},r))})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Primitives',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
    padding: '40px 0'
  }}>
      {(Object.entries(radiusScale) as [keyof typeof radiusScale, number][]).map(([name, value]) => <div key={name} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }}>
          <div style={{
        width: 120,
        height: 64,
        borderRadius: value,
        background: 'var(--background-secondary)',
        border: '1px solid var(--border-color-primary)',
        flexShrink: 0
      }} />
          <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}>
            <span style={{
          ...FONT,
          fontSize: 16,
          fontWeight: 600
        }}>border-radius-{name}</span>
            <span style={{
          ...FONT,
          fontSize: 14,
          color: 'var(--text-secondary)'
        }}>{value}px</span>
          </div>
        </div>)}
    </div>
}`,...n.parameters?.docs?.source}}};const c=["Primitives"];export{n as Primitives,c as __namedExportsOrder,p as default};
