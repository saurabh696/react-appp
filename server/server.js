import express from 'express'
import fs from 'fs'
import path from 'path'
import ReactDOMServer from 'react-dom/server'
import React from 'react'
import counter from '../src/App'



const app = express()
const port = 8000;

app.use('^/$', (req, res, next) => {
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
            return res.status(500).send("error occured")
        }
        return res.send(data.replace(' <div id="root"></div>',
            `<div id="root">${ReactDOMServer.renderToString(<counter />)}</div>`
        )
        );

    });

});

app.use(express.static(path.resolve (__dirname,'..', 'builtfolder')))

app.listen(port, () => {
    console.log('app launched on', port)
})

