import axios from "axios";

export const callGetApi = (
    api,
    params,
    apiConfig = {}
) => {
    return new Promise((res, rej) => {
        axios
            .get(api, {
                params: params,
                ...apiConfig,
            })
            .then((response) => {
                if (response.status === 200) {
                    res(response.data);
                } else {
                    rej(response.data);
                }
            })
            .catch((error) => {
                return rej(error);
            });
    });
};

export const callPostApi = (
    api,
    body,
    config={}
) => {
    return new Promise((res, rej) => {
        axios
            .post(api, body,config)
            .then((response) => {
                console.log("response",response);
                if (
                    response.status === 200 ||
                    response.status === 201
                ) {
                    res(response.data);
                } else {
                    rej(response.data);
                }
            })
            .catch((error) => {
                return rej(error);
            });
    });
};