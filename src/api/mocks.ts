import { CompanyOrderType } from "../store/userSlice";

const getRandomOrdersCount = (branchName: string, date: string) => {
    const count = Number((1 + Math.random() * (5 + 1 - 1)).toFixed());

    const resultArr: CompanyOrderType[] = []

    for (let i = 0; i < count; i++) {
        resultArr.push({
            "branchName": branchName,
            "orderDuration": 2,
            "date": date
        })
    }

    return resultArr
}

export const logInMock = {
    "user": {
        "uid": "il2Eb4s0rxc2ySYfk5Rw3QXV0MF3",
        "email": "admin@mail.com",
        "emailVerified": false,
        "isAnonymous": false,
        "providerData": [
            {
                "providerId": "password",
                "uid": "admin@mail.com",
                "displayName": null,
                "email": "admin@mail.com",
                "phoneNumber": null,
                "photoURL": null
            }
        ],
        "stsTokenManager": {
            "refreshToken": "AMf-vBwzS9IPdaxl3djqk2xdjMDdQ_CLVwbD-3b0RvpnXH203Am7DY4URHfQReT-72ldh779h3OolZr_zUabSBTLP-obcoJK5p5462awHR4IVtvPfl_po7SquXXjxjTltDOnX7Y_d5-q9d6mHG8ZDhA_s3_FyD3hSlATdcN7oZ3a3lnVHaf8rqIDYktt4R23dhUv3xqcA9gG-AKFFmFPJqIwXtZuqkQAXw",
            "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjcxMTE1MjM1YTZjNjE0NTRlZmRlZGM0NWE3N2U0MzUxMzY3ZWViZTAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vaGFsbHJlbnQtOGM3M2EiLCJhdWQiOiJoYWxscmVudC04YzczYSIsImF1dGhfdGltZSI6MTc0Mzc2NjU5MywidXNlcl9pZCI6ImlsMkViNHMwcnhjMnlTWWZrNVJ3M1FYVjBNRjMiLCJzdWIiOiJpbDJFYjRzMHJ4YzJ5U1lmazVSdzNRWFYwTUYzIiwiaWF0IjoxNzQzNzY2NTkzLCJleHAiOjE3NDM3NzAxOTMsImVtYWlsIjoiYWRtaW5AbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiYWRtaW5AbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.NH90FdY4199ewvKzVhsyFjd0mPxdTjtlBTfIlL2OSqY1-PJ7vtjy-kmbPa_bqmwbm-A4ckPEX-VH31z2tTYDW0fu5bmcCxfNpVzDUtIlZXq7OKwC1eali1eAk7v--e5nSs8HFjNUHP1-d7qdsh_7PN5g3V4IkF-ffWOlHHTmIkb2yjk5RdAjOMYgNBp3E-fU-wIrwhVzluhWO1tV89tZtOorJu7122-adiBLodIK2UBAV9lD_AF0821RSV4V1uNBnMQ-QIZ6tZko9btOCqiyPOgrgWqrXlVwdb0-SDSZuFFlZ9hEjpMbaCHSiWjH1BgnFOwWjfNFHeBJ_e4WlSEezQ",
            "expirationTime": 1743770193825
        },
        "createdAt": "1743314721217",
        "lastLoginAt": "1743766593096",
        "apiKey": "AIzaSyDDxwOc-q0gkgHAjicT6ozfhJJZik1TaUM",
        "appName": "[DEFAULT]"
    },
    "providerId": null,
    "_tokenResponse": {
        "kind": "identitytoolkit#VerifyPasswordResponse",
        "localId": "il2Eb4s0rxc2ySYfk5Rw3QXV0MF3",
        "email": "admin@mail.com",
        "displayName": "",
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjcxMTE1MjM1YTZjNjE0NTRlZmRlZGM0NWE3N2U0MzUxMzY3ZWViZTAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vaGFsbHJlbnQtOGM3M2EiLCJhdWQiOiJoYWxscmVudC04YzczYSIsImF1dGhfdGltZSI6MTc0Mzc2NjU5MywidXNlcl9pZCI6ImlsMkViNHMwcnhjMnlTWWZrNVJ3M1FYVjBNRjMiLCJzdWIiOiJpbDJFYjRzMHJ4YzJ5U1lmazVSdzNRWFYwTUYzIiwiaWF0IjoxNzQzNzY2NTkzLCJleHAiOjE3NDM3NzAxOTMsImVtYWlsIjoiYWRtaW5AbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiYWRtaW5AbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.NH90FdY4199ewvKzVhsyFjd0mPxdTjtlBTfIlL2OSqY1-PJ7vtjy-kmbPa_bqmwbm-A4ckPEX-VH31z2tTYDW0fu5bmcCxfNpVzDUtIlZXq7OKwC1eali1eAk7v--e5nSs8HFjNUHP1-d7qdsh_7PN5g3V4IkF-ffWOlHHTmIkb2yjk5RdAjOMYgNBp3E-fU-wIrwhVzluhWO1tV89tZtOorJu7122-adiBLodIK2UBAV9lD_AF0821RSV4V1uNBnMQ-QIZ6tZko9btOCqiyPOgrgWqrXlVwdb0-SDSZuFFlZ9hEjpMbaCHSiWjH1BgnFOwWjfNFHeBJ_e4WlSEezQ",
        "registered": true,
        "refreshToken": "AMf-vBwzS9IPdaxl3djqk2xdjMDdQ_CLVwbD-3b0RvpnXH203Am7DY4URHfQReT-72ldh779h3OolZr_zUabSBTLP-obcoJK5p5462awHR4IVtvPfl_po7SquXXjxjTltDOnX7Y_d5-q9d6mHG8ZDhA_s3_FyD3hSlATdcN7oZ3a3lnVHaf8rqIDYktt4R23dhUv3xqcA9gG-AKFFmFPJqIwXtZuqkQAXw",
        "expiresIn": "3600"
    },
    "operationType": "signIn"
}

export const signUpMock = {
    "user": {
        "uid": "ltLKFGvv05Pon8Ss7ZPacSJsLXr1",
        "email": "admin1@mail.com",
        "emailVerified": false,
        "isAnonymous": false,
        "providerData": [
            {
                "providerId": "password",
                "uid": "admin1@mail.com",
                "displayName": null,
                "email": "admin1@mail.com",
                "phoneNumber": null,
                "photoURL": null
            }
        ],
        "stsTokenManager": {
            "refreshToken": "AMf-vBwB0XxcFiiv8NVEnoFj_VxJNAr2am_H7lMTFBls0E2p8zAAIpRUo2mNAeDU6hYoiO0Z-8CEGk8ysSdqn2oI9bqj3OoEfStk2HdmBdgXUieaDfS0ayXFnyE3v1vlHvpEJNzNeO6UB2KqpdL8mPjNDy586OTWxNdfym6rtR8HTQiIe5aJAXeK7CXkr442k3gMmL5Alos1JawgiVVginM8Bv_Sntdc3Q",
            "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE5ZGRjYTc2YzEyMzMyNmI5ZTJlODJkOGFjNDg0MWU1MzMyMmI3NmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vaGFsbHJlbnQtOGM3M2EiLCJhdWQiOiJoYWxscmVudC04YzczYSIsImF1dGhfdGltZSI6MTc0Mzc2NjcyMiwidXNlcl9pZCI6Imx0TEtGR3Z2MDVQb244U3M3WlBhY1NKc0xYcjEiLCJzdWIiOiJsdExLRkd2djA1UG9uOFNzN1pQYWNTSnNMWHIxIiwiaWF0IjoxNzQzNzY2NzIyLCJleHAiOjE3NDM3NzAzMjIsImVtYWlsIjoiYWRtaW4xQG1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFkbWluMUBtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.nNT8H7SfVX2lS9llSpy-Z6749DmIdF-UCTQyaM3SoIyFpHnxJnmYc19YHICqEmnqdaK6Z-DIdR0kyfMhS_1fMqUHT9X_jBEJ3Jlh4P4WASvlu-whRCPBYd9EMBHcz8Pgtr2e7v2_zmkmf9Hn2sj9WxVPLid7TIOLM6ZmLsDgaI4LMoXB24zbK875B9M-pCMIVgaa1FlGWHpmY-OIoclHLlgDovj3FE3ie3TvdwUrzEf7vJRVtNsHoDFoU1TEO2rPlmuug_Z7WUJToofrZ3bf6aucmyjsOk83zpQpVm_OEZsvGd-6FF_1jVqFkNU1st5BoI3qyUiVoikLTGjMGc2S0w",
            "expirationTime": 1743770323067
        },
        "createdAt": "1743766721979",
        "lastLoginAt": "1743766721979",
        "apiKey": "AIzaSyDDxwOc-q0gkgHAjicT6ozfhJJZik1TaUM",
        "appName": "[DEFAULT]"
    },
    "providerId": null,
    "_tokenResponse": {
        "kind": "identitytoolkit#SignupNewUserResponse",
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE5ZGRjYTc2YzEyMzMyNmI5ZTJlODJkOGFjNDg0MWU1MzMyMmI3NmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vaGFsbHJlbnQtOGM3M2EiLCJhdWQiOiJoYWxscmVudC04YzczYSIsImF1dGhfdGltZSI6MTc0Mzc2NjcyMiwidXNlcl9pZCI6Imx0TEtGR3Z2MDVQb244U3M3WlBhY1NKc0xYcjEiLCJzdWIiOiJsdExLRkd2djA1UG9uOFNzN1pQYWNTSnNMWHIxIiwiaWF0IjoxNzQzNzY2NzIyLCJleHAiOjE3NDM3NzAzMjIsImVtYWlsIjoiYWRtaW4xQG1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFkbWluMUBtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.nNT8H7SfVX2lS9llSpy-Z6749DmIdF-UCTQyaM3SoIyFpHnxJnmYc19YHICqEmnqdaK6Z-DIdR0kyfMhS_1fMqUHT9X_jBEJ3Jlh4P4WASvlu-whRCPBYd9EMBHcz8Pgtr2e7v2_zmkmf9Hn2sj9WxVPLid7TIOLM6ZmLsDgaI4LMoXB24zbK875B9M-pCMIVgaa1FlGWHpmY-OIoclHLlgDovj3FE3ie3TvdwUrzEf7vJRVtNsHoDFoU1TEO2rPlmuug_Z7WUJToofrZ3bf6aucmyjsOk83zpQpVm_OEZsvGd-6FF_1jVqFkNU1st5BoI3qyUiVoikLTGjMGc2S0w",
        "email": "admin1@mail.com",
        "refreshToken": "AMf-vBwB0XxcFiiv8NVEnoFj_VxJNAr2am_H7lMTFBls0E2p8zAAIpRUo2mNAeDU6hYoiO0Z-8CEGk8ysSdqn2oI9bqj3OoEfStk2HdmBdgXUieaDfS0ayXFnyE3v1vlHvpEJNzNeO6UB2KqpdL8mPjNDy586OTWxNdfym6rtR8HTQiIe5aJAXeK7CXkr442k3gMmL5Alos1JawgiVVginM8Bv_Sntdc3Q",
        "expiresIn": "3600",
        "localId": "ltLKFGvv05Pon8Ss7ZPacSJsLXr1"
    },
    "operationType": "signIn"
}

export const userDataMock = {
    data: () => ({
        "companyBranches": [
            {
                "address": "ул. Центральная, д. 25",
                "oneHourPrice": 2500,
                "name": "ТРК \"Сибирь\"",
                "premisesSize": 40,
                "coords": [
                    55,
                    37
                ]
            }
        ],
        "companyName": "Макдональдс",
        "ordersData": [
            ...getRandomOrdersCount('ТРК "Сибирь"', new Date(new Date().setDate(new Date().getDate() - 1)).toISOString()),
            ...getRandomOrdersCount('ТРК "Сибирь"', new Date().toISOString()),
            ...getRandomOrdersCount('ТРК "Сибирь"', new Date(new Date().setDate(new Date().getDate() + 1)).toISOString()),
        ],
        "role": "LESSOR"
    })
}

