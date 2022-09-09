import axios from "axios"


export const api = axios.create({
    baseURL: `https://hotel-api-s3.herokuapp.com`
})

export const getReservas = async () => {

    return await api.get("/reservas/hospede/" + localStorage.getItem("id_Hospede"))
        .then((response) => {
            console.log(response);

            if (response.data.mensage !== "undefined") {
                return response.data.mensage;
            }
            console.log(reservas);
        }).catch((erro) => {
            console.log(erro);
            return response
        })


}