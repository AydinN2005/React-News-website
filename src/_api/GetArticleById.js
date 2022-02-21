import { BasicApi } from "./BasicApi";
export const GetArticleById = (callback) => {
    return BasicApi().get("/articles").then(res => {
        const data = res.data;
        const bool = true;
        callback(bool, data)
    }).catch (err => {
    const errror = err.message;
    alert("this article my be not exist!")
    const bool = false;
    callback(bool, errror)
});
}