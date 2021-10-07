import {FFCJsClient} from "ffc-js-client-sdk/esm";
import { useEffect, useState} from "react";

// 初始化sdk，传入环境Secret Key和用户信息
FFCJsClient.initialize('YThmLWRmZjUtNCUyMDIxMDkxNzA3NTYyMV9fMl9fMjJfXzExNl9fZGVmYXVsdF82NTM3Mg==');

// 初始化用户信息，通常这一步会在登录后被调用
FFCJsClient.initUserInfo({
	userName: 'sdk-sample-js-1252',
	email: '',
	key: 'sdk-sample-js-1252',
	country: "",
	customizeProperties: [
		{
			name: "外放地址",
			value: "?from=zhihu&group=pm"
		}
	]
})

export const useVariation = () => {
	const [variation, setVariation] = useState('');

	useEffect(() => {
		const result = FFCJsClient.variation('主页---话术版本', '产品经理版1')
		setVariation(result)
	})

	return variation;
}

export const useTrack = async () => {
	const res = await FFCJsClient.trackCustomEventAsync([
		{
			eventName: "开始使用点击事件"
		}
	])
	if (res){
		alert("事件发送成功");
	}else {
		alert("事件发送失败");
	}
}
