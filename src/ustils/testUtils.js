export const findTestByHtml = (component,tag) =>{
    const wrapper = component.dive().find(`${tag}`);
    return wrapper;
}