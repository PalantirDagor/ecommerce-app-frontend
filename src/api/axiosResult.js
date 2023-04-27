
export const axiosResult = () => {

    return async () => {

        const { data } = await axiosIntance.get();
        data.results;
    }
}