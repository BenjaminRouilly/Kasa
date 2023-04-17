import React from 'react';

const Collapse = ({ title,content }) => {

    const [isContentVisible,setIsContentVisible] = React.useState(false);
    const collapse = ()=> {
        setIsContentVisible(!isContentVisible);
    }
    const className = {
        header: `collapsible`,
        myicon: `fa-sharp fa-solid fa-chevron-up${isContentVisible ? '' : ' icon-rotate' }`,
        content:`content${isContentVisible ? ' ' : ' not-displayed'}`,
      };
    return (
        <>  
            <button className={className.header} onClick={() => {collapse()}}>{title}
            <i className={className.myicon}></i>
            </button>
            <div className={className.content}>{
                Array.isArray(content) ? 
                (
                   <ul>
                    {content.map((item,i) => <li key={i}>{item}</li>)}
                    </ul>
                ) 
                : (<p>{content}</p>)
            }
            </div>
        </>
    );
};

export default Collapse;