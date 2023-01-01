import axios from "axios";
import { BASE_URL } from "../../src/constans/api";

const url = BASE_URL;

export default function useAxios() {

	const apiClient = axios.create({
		baseURL: url,
	});

	apiClient.interceptors.request.use(function (config) {
		const token = JSON.parse(localStorage.getItem("token"));
		config.headers.Authorization = token ? `${token}` : "";
		return config;
	});

	return apiClient;
}