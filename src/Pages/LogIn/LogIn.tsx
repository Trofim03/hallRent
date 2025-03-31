import {Alert, Button, Form, Input, Layout} from 'antd'
import { getAuth, signInWithEmailAndPassword  } from 'firebase/auth'
import { firebaseApp } from '../../utils/firebaseInit'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { IUserState, setUserState } from '../../store/userSlice'
import { saveLocalStorageData } from '../../utils'

const {Item} = Form

export const LogIn = () => {
    const dispatch = useDispatch()
    const [error, setError] = useState('')
    const auth = getAuth(firebaseApp)
    const [form] = Form.useForm();

    const onFinish = (fieldsValue: any) => {
        signInWithEmailAndPassword(auth, fieldsValue.email, fieldsValue.password)
        .then((userCredential) => {
            const userData: IUserState = {id: userCredential.user.uid, role: 'USER'}
            
            dispatch(setUserState(userData))
            saveLocalStorageData('user', userData)
        })
        .catch((error) => setError(error.code))
    };

    return (
        <Layout >
            <Form
                form={form}
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Item
                    label="Email"
                    name="email"
                    rules={[{
                        type: 'email',
                        message: 'The input is not valid email!',
                      },
                      { 
                        required: true, 
                        message: 'Please input your email!' 
                    }
                    ]}
                >
                    <Input />
                </Item>

                <Item
                    label="Пароль"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Item>

                <Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Войти
                    </Button>
                </Item>
                {error && <Alert message={error} type="error" style={{textAlign: 'center'}}/>}
            </Form>
      </Layout>
    )
}