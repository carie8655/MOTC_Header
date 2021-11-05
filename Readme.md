# react-prime-motc-header

Source code at https://github.com/carie8655/react-prime-motc-header

## Installation

    npm install --save react-prime-motc-header

or

    yarn add react-prime-motc-header

## Usage

```
import React from 'react';
import MOTCHeader from 'react-prime-motc-header';

function MOTCHeaderDemo(){
    return(
        <React.Fragment>
            <div>
                <MOTCHeader
                    title="Test"
                    subTitle="SubTitle"
                    isMobile={false}
                    logo={null}
                    username="User"
                    menu={[]}
                    onClickLogo={e => console.log(e)}
                    onClickMenu={e => console.log(e)}
                />
            </div>
        </React.Fragment>
    )
}

export default MOTCHeaderDemo;
```

## Props

| Name        | Type       | Default       |
| ----------- | ---------- | ------------- |
| title       | 'string'   | ''            |
| subTitle    | 'string'   | ''            |
| username    | 'string'   | ''            |
| isMobile    | 'boolean'  | false         |
| logo        | file url   | null          |
| menu        | 'array'    | []            |
| onClickLogo | 'function' | (event) => {} |
| onClickMenu | 'function' | (path) => {}  |
