import{j as n}from"./jsx-runtime-u17CrQMm.js";import"./iframe-BNWTn59m.js";import"./preload-helper-PPVm8Dsz.js";const v={title:"Foundations/Shadows",parameters:{layout:"padded"},tags:["autodocs"]},e={fontFamily:"var(--font-family-base)",color:"var(--text-primary)"},d={background:"var(--background-primary)",border:"1px solid var(--border-color-secondary)",borderRadius:16,width:240,height:180,display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:12,overflow:"hidden"},s={name:"Primitives",render:()=>n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:40,padding:"40px 0"},children:[["shadow1","var(--shadow-1)"],["shadow2","var(--shadow-2)"]].map(([a,p])=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:40},children:[n.jsx("div",{style:{...d,boxShadow:p}}),n.jsx("span",{style:{...e,fontSize:16,fontWeight:600},children:a})]},a))})},o={name:"Token / card",render:()=>n.jsx("div",{style:{padding:"40px 0"},children:n.jsx("div",{style:{...d,boxShadow:"var(--shadow-card)"},children:n.jsx("span",{style:{...e,fontSize:14},children:"card"})})})},r={name:"Token / page-header",render:()=>n.jsx("div",{style:{padding:"40px 0"},children:n.jsx("div",{style:{background:"var(--background-brand)",borderBottom:"1px solid var(--border-color-primary)",boxShadow:"var(--shadow-page-header)",height:40,display:"flex",alignItems:"center",padding:"0 12px",width:480},children:n.jsx("span",{style:{...e,fontSize:14,color:"var(--text-invert)"},children:"page-header"})})})},i={name:"Token / modal",render:()=>n.jsx("div",{style:{padding:"40px 0"},children:n.jsx("div",{style:{...d,boxShadow:"var(--shadow-modal)"},children:n.jsx("span",{style:{...e,fontSize:14},children:"modal"})})})},t={name:"Token / focus",render:()=>n.jsx("div",{style:{padding:"40px 0"},children:n.jsx("div",{style:{...d,border:"1px solid var(--focus)",boxShadow:"var(--shadow-focus)"},children:n.jsx("span",{style:{...e,fontSize:14},children:"focus"})})})},l={name:"All Shadows",render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:48,padding:"40px 0"},children:[n.jsxs("div",{style:{display:"flex",gap:80},children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[n.jsx("span",{style:{...e,fontSize:18,fontWeight:600},children:"Tokens"}),["card → shadow1","page-header → shadow1","modal → shadow2","focus → focus-ring"].map(a=>n.jsx("span",{style:{...e,fontSize:16},children:a},a))]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[n.jsx("span",{style:{...e,fontSize:18,fontWeight:600},children:"Primitives"}),["shadow1","shadow2"].map(a=>n.jsx("span",{style:{...e,fontSize:16},children:a},a))]})]}),n.jsx("div",{style:{...d,boxShadow:"var(--shadow-card)"},children:n.jsx("span",{style:{...e,fontSize:14},children:"card"})}),n.jsx("div",{style:{background:"var(--background-brand)",borderBottom:"1px solid var(--border-color-primary)",boxShadow:"var(--shadow-page-header)",height:40,display:"flex",alignItems:"center",padding:"0 12px",width:480},children:n.jsx("span",{style:{...e,fontSize:14,color:"var(--text-invert)"},children:"page-header"})}),n.jsx("div",{style:{...d,boxShadow:"var(--shadow-modal)"},children:n.jsx("span",{style:{...e,fontSize:14},children:"modal"})}),n.jsx("div",{style:{...d,border:"1px solid var(--focus)",boxShadow:"var(--shadow-focus)"},children:n.jsx("span",{style:{...e,fontSize:14},children:"focus"})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Primitives',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 40,
    padding: '40px 0'
  }}>
      {([['shadow1', 'var(--shadow-1)'], ['shadow2', 'var(--shadow-2)']] as const).map(([name, value]) => <div key={name} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 40
    }}>
          <div style={{
        ...CARD,
        boxShadow: value
      }} />
          <span style={{
        ...FONT,
        fontSize: 16,
        fontWeight: 600
      }}>{name}</span>
        </div>)}
    </div>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Token / card',
  render: () => <div style={{
    padding: '40px 0'
  }}>
      <div style={{
      ...CARD,
      boxShadow: 'var(--shadow-card)'
    }}>
        <span style={{
        ...FONT,
        fontSize: 14
      }}>card</span>
      </div>
    </div>
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Token / page-header',
  render: () => <div style={{
    padding: '40px 0'
  }}>
      <div style={{
      background: 'var(--background-brand)',
      borderBottom: '1px solid var(--border-color-primary)',
      boxShadow: 'var(--shadow-page-header)',
      height: 40,
      display: 'flex',
      alignItems: 'center',
      padding: '0 12px',
      width: 480
    }}>
        <span style={{
        ...FONT,
        fontSize: 14,
        color: 'var(--text-invert)'
      }}>
          page-header
        </span>
      </div>
    </div>
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Token / modal',
  render: () => <div style={{
    padding: '40px 0'
  }}>
      <div style={{
      ...CARD,
      boxShadow: 'var(--shadow-modal)'
    }}>
        <span style={{
        ...FONT,
        fontSize: 14
      }}>modal</span>
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Token / focus',
  render: () => <div style={{
    padding: '40px 0'
  }}>
      <div style={{
      ...CARD,
      border: '1px solid var(--focus)',
      boxShadow: 'var(--shadow-focus)'
    }}>
        <span style={{
        ...FONT,
        fontSize: 14
      }}>focus</span>
      </div>
    </div>
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'All Shadows',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 48,
    padding: '40px 0'
  }}>

      {/* Token → Primitive reference table */}
      <div style={{
      display: 'flex',
      gap: 80
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }}>
          <span style={{
          ...FONT,
          fontSize: 18,
          fontWeight: 600
        }}>Tokens</span>
          {['card → shadow1', 'page-header → shadow1', 'modal → shadow2', 'focus → focus-ring'].map(line => <span key={line} style={{
          ...FONT,
          fontSize: 16
        }}>{line}</span>)}
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }}>
          <span style={{
          ...FONT,
          fontSize: 18,
          fontWeight: 600
        }}>Primitives</span>
          {(['shadow1', 'shadow2'] as const).map(name => <span key={name} style={{
          ...FONT,
          fontSize: 16
        }}>{name}</span>)}
        </div>
      </div>

      {/* card */}
      <div style={{
      ...CARD,
      boxShadow: 'var(--shadow-card)'
    }}>
        <span style={{
        ...FONT,
        fontSize: 14
      }}>card</span>
      </div>

      {/* page-header */}
      <div style={{
      background: 'var(--background-brand)',
      borderBottom: '1px solid var(--border-color-primary)',
      boxShadow: 'var(--shadow-page-header)',
      height: 40,
      display: 'flex',
      alignItems: 'center',
      padding: '0 12px',
      width: 480
    }}>
        <span style={{
        ...FONT,
        fontSize: 14,
        color: 'var(--text-invert)'
      }}>
          page-header
        </span>
      </div>

      {/* modal */}
      <div style={{
      ...CARD,
      boxShadow: 'var(--shadow-modal)'
    }}>
        <span style={{
        ...FONT,
        fontSize: 14
      }}>modal</span>
      </div>

      {/* focus */}
      <div style={{
      ...CARD,
      border: '1px solid var(--focus)',
      boxShadow: 'var(--shadow-focus)'
    }}>
        <span style={{
        ...FONT,
        fontSize: 14
      }}>focus</span>
      </div>

    </div>
}`,...l.parameters?.docs?.source}}};const m=["Primitives","CardShadow","PageHeaderShadow","ModalShadow","FocusShadow","AllShadows"];export{l as AllShadows,o as CardShadow,t as FocusShadow,i as ModalShadow,r as PageHeaderShadow,s as Primitives,m as __namedExportsOrder,v as default};
