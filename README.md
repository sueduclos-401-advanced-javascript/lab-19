# lab-19
Code 401 Lab 19 - Message Queues

# LAB 18 - Class 18 Socket.io

## Project Name - Code Academy Parcel Service

Code 401 Lab 19 - Message Queues

Combine Express servers and sockets, to have a communication network over both HTTP and TCP. This lab will only be focusing on order delivery, and not on order creation or transit.

Create four independent applications running on terminal and communicating with one another.

- The message queue server (socket server)
- The delivery API server (socket client, express server)
- Vendor 01 (socket client)
- Vendor 02 (socket client)

The delivery API server should expose an HTTP POST route of the format `/delivery/:vendor/:order-id`. This route will not have any body parameters, and when triggered using Postman or a similar service, it should tell the appropriate vendor that an order was delivered. If that vendor happens to be disconnected, the message should be saved and sent when the vendor is back online.

### Author: Sue Duclos

### Links and Resources

- [submission PR](https://github.com/sueduclos-401-advanced-javascript/lab-19/pull/1)

### Setup

- `npm install`

#### How to initialize/run your application

- `node queue-server.js`
- `node api.js`
- `node vendor-01.js`
- `node vendor-02.js`

#### Tests

- N/A

#### UML

- ![UML19]()
