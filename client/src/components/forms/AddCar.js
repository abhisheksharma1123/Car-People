import React, { useEffect, useState } from 'react'
import { useMutation } from '@apollo/client'

import { Form, Input, Button, InputNumber } from 'antd'

import { v4 as uuidv4 } from 'uuid'
import { ADD_CAR, GET_CARS } from '../../queries'

const AddCar = () => {
  const [id] = useState(uuidv4())
  const [form] = Form.useForm()
  const [, forceUpdate] = useState()
  const [addCar] = useMutation(ADD_CAR)

  useEffect(() => {
    forceUpdate({})
  }, [])

  const onFinish = values => {
    const { year, make, model, price, personId } = values

    addCar({
      variables: {
        id,
        year,
        make,
        price,
        personId,
        model
      },
      optimisticResponse: {
        __typename: 'Mutation',
        addCar: {
          __typename: 'Car',
          id,
          year,
          make,
          model,
          price,
          personId
        }
      },
      update: (proxy, { data: { addCar } }) => {
        const data = proxy.readQuery({ query: GET_CARS })
        proxy.writeQuery({
          query: GET_CARS,
          data: {
            ...data,
            cars: [...data.cars, addCar]
          }
        })
      }
    })
  }

  return (
    <Form
      form={form}
      name='add-car-form'
      layout='inline'
      onFinish={onFinish}
      size='large'
      style={{ marginBottom: '40px' }}
    >
         <Form.Item
                    name="year"
                    rules={[{ required: true, message: "Please input year!" }]}
                >
                    <Input placeholder="year" />
                </Form.Item>

                <Form.Item
                    name="make"
                    rules={[{ required: true, message: "Please input make!" }]}
                >
                    <Input placeholder="Make" />
                </Form.Item>

                <Form.Item
                    name="model"
                    rules={[{ required: true, message: "Please input model!" }]}
                >
                    <Input placeholder="Model" />
                </Form.Item>
                <Form.Item
                    name="price"
                    rules={[{ required: true, message: "Please input price!" }]}
                >
                    <InputNumber placeholder="price"/>
                </Form.Item>
                <Form.Item
                    name="personId"
                    rules={[{ required: true, message: "Please input personId!" }]}
                >
                    <Input placeholder="personId" />
                </Form.Item>
     
      <Form.Item shouldUpdate={true}>
        {() => (
          <Button
            type='primary'
            htmlType='submit'
            disabled={
              !form.isFieldsTouched(true) ||
              form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Add Car
          </Button>
        )}
      </Form.Item>
    </Form>
  )
}

export default AddCar