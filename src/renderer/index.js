export function captureScreen(target, size){
    let {width, height} = size;

     width = parseInt(width) * window.devicePixelRatio;
     height = parseInt(height) * window.devicePixelRatio;

    let timer = setTimeout(function(){
        clearTimeout(timer);
        target && target.capturePage({ x:0, y:0, width: parseInt(width), height: parseInt(height)}, function(result){
            try {
                // result.resize({quality: 'good'});
                // proObj.project[proObj.current].screenData = result.toDataURL();
                // saveProjectInfo(proObj, 'imageInfo.json');
            }catch (e) {
                // not to do anything;
            }
        })
    }, 2000);
}
