export function enableInstagramEmbed(){
    // console.log('enabling instagram 1/2')
    if (window.instgrm && window.instgrm.Embeds) {
        // console.log('enabling instagram 2/2')
    window.instgrm.Embeds.process();
}
}