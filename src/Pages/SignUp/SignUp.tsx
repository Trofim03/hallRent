import {Alert, Button, Checkbox, Form, Input, Layout} from 'antd'
import { getAuth, createUserWithEmailAndPassword  } from 'firebase/auth'
import { firebaseApp } from '../../utils/firebase/firebaseInit'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUserId } from '../../store/userSlice'
import { saveLocalStorageData } from '../../utils'

const {Item} = Form

export const SignUp =() => {
    const dispatch = useDispatch()
    const [error, setError] = useState('')
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false)
    const auth = getAuth(firebaseApp)
    const [form] = Form.useForm();

    const onCheckboxChange = () => {
        setIsCheckboxChecked(prev => !prev)
    }

    const onFinish = (fieldsValue: any) => {
        createUserWithEmailAndPassword (auth, fieldsValue.email, fieldsValue.password)
        .then((userCredential) => {
                                
            dispatch(setUserId(userCredential.user.uid))
            if (isCheckboxChecked) {
                saveLocalStorageData('userId', userCredential.user.uid)
            }
        })
        .catch((error) => setError(error.code))
    };

    const onBtnClick = () => {
        setError('')
    }

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
                <Input type='mail' />
            </Item>

            <Item
                label="Пароль"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Item>

            <Item label="Запомнить брузер" className='formItemCheckbox'>
                <Checkbox onChange={onCheckboxChange}>Запомнить браузер</Checkbox>
            </Item>

            <Item label={null}>
                <Button type="primary" htmlType="submit" onClick={onBtnClick}>
                    Зарегистрироваться
                </Button>
            </Item>
            {error && <Alert message={error} type="error" style={{textAlign: 'center'}}/>}
        </Form>
  </Layout>
    )
}