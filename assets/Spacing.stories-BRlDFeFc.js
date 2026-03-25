import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-C7v2YsCr.js";import{s as t,b as r}from"./tokens-D4qHVeFC.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"Foundations/Spacing",parameters:{layout:"padded"},tags:["autodocs"]},s={fontFamily:"var(--font-family-base)",color:"var(--text-primary)"},a={name:"Primitives",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32,padding:"40px 0",width:"100%"},children:Object.entries(t).filter(([n])=>n!=="none").map(([n,i])=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("div",{style:{width:"100%",height:i,background:"var(--background-secondary)",borderRadius:2,flexShrink:0}}),e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"baseline",whiteSpace:"nowrap",minWidth:340},children:[e.jsx("span",{style:{...s,fontSize:16},children:r[n]}),e.jsxs("span",{style:{...s,fontSize:14,color:"var(--text-secondary)"},children:[i,"px"]})]})]},n))})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Primitives',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
    padding: '40px 0',
    width: '100%'
  }}>
      {(Object.entries(spacingScale) as [keyof typeof spacingScale, number][]).filter(([key]) => key !== 'none').map(([key, value]) => <div key={key} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }}>
            {/* Bar */}
            <div style={{
        width: '100%',
        height: value,
        background: 'var(--background-secondary)',
        borderRadius: 2,
        flexShrink: 0
      }} />
            {/* Label */}
            <div style={{
        display: 'flex',
        gap: 8,
        alignItems: 'baseline',
        whiteSpace: 'nowrap',
        minWidth: 340
      }}>
              <span style={{
          ...FONT,
          fontSize: 16
        }}>{spacingNames[key]}</span>
              <span style={{
          ...FONT,
          fontSize: 14,
          color: 'var(--text-secondary)'
        }}>{value}px</span>
            </div>
          </div>)}
    </div>
}`,...a.parameters?.docs?.source}}};const m=["Primitives"];export{a as Primitives,m as __namedExportsOrder,c as default};
