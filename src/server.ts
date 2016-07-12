import app from './app';

app.listen(app.get('port'), (err) => {
    if(err) {
        throw err;
    }

    console.log(`Express server listening on port ${app.get('port')}`);
});
