import sys
import socket
import json
import time

import flask
from flask import Flask, render_template, jsonify
import random

##################
# https://www.askpython.com/python/dictionary/python-dictionary-dict-tutorial
##################

# print("Web interface system monitoring using lask (ver {})".format(flask.__version__))

# TODO: tentar nao desconectar.

app = Flask(__name__)

@app.route('/get_server_data')
def read_sensor():
    # # Create a TCP/IP socket
    # print("Creating socket...")
    # sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    #
    # # Connect the socket to the port where the server is listening
    # server_address = ('192.168.1.100', 5001)
    # # print >>sys.stderr, 'connecting to %s port %s' % server_address
    # print("Connecting to {0[0]} port {0[1]}...".format(server_address))
    # sock.connect(server_address)

    try:
        # Send data
        print("Requesting SMs data...")
        message = 'This is the message.  It will be repeated.'.encode()
        sock.sendall(message)

        # Look for the response
        data = sock.recv(4096).decode('utf-8').rstrip('\x00')

        if data:
            print("Type: {}".format(type(data)))
            print("Received data (len {}): {}".format(len(data), data))

            json_data = json.loads(data)

            # print("Json (type {}): {}".format(type(json_data), json_data))
            # for key in json_data:
            #     print("Item found: {}".format(key))
            #     print("Device name: {}".format(json_data[key]['device_name']))
            #     print("Timestamp: {}".format(json_data[key]['timestamp']))
            #     print("L1 voltage: {} mV".format(json_data[key]['l1_voltage']))

        else:
            print("Disconnected")

    finally:
        print("Finalizing.")
        # sock.close()



    # return the actual sensor data here:
    # thisdict = {
    #     '0': {
    #         # 'l1_voltage': random.choice(range(1,400)),
    #         'l1_voltage': 210500,
    #         'a2':10
    #     }
    # }
    # return {flask.jsonify(thisdict)}
    # return thisdict
    return json_data

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    # Create a TCP/IP socket
    print("Creating socket...")
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    # Connect the socket to the port where the server is listening
    server_address = ('192.168.1.2', 5001)
    # print >>sys.stderr, 'connecting to %s port %s' % server_address
    print("Connecting to {0[0]} port {0[1]}...".format(server_address))
    sock.connect(server_address)

    app.run()


# @app.route('/')
# def hello():
#     return 'Hello, World!'




# while True:
#     # Create a TCP/IP socket
#     print("Creating socket...")
#     sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
#
#     # Connect the socket to the port where the server is listening
#     server_address = ('192.168.1.100', 5001)
#     # print >>sys.stderr, 'connecting to %s port %s' % server_address
#     print("Connecting to {0[0]} port {0[1]}...".format(server_address))
#     sock.connect(server_address)
#
#
#     try:
#         # Send data
#         print("Requesting SMs data...")
#         message = 'This is the message.  It will be repeated.'.encode()
#         sock.sendall(message)
#
#         # Look for the response
#         data = sock.recv(4096).decode('utf-8').rstrip('\x00')
#
#         if data:
#             print("Type: {}".format(type(data)))
#             print("Received data (len {}): {}".format(len(data), data))
#
#             json_data = json.loads(data)
#
#             print("Json (type {}): {}".format(type(json_data), json_data))
#             for key in json_data:
#                 print("Item found: {}".format(key))
#                 print("Device name: {}".format(json_data[key]['device_name']))
#                 print("Timestamp: {}".format(json_data[key]['timestamp']))
#                 print("L1 voltage: {} mV".format(json_data[key]['l1_voltage']))
#                 # TODO: mandar aqui para a interface flask
#
#         else:
#             print("Disconnected")
#
#     finally:
#         print("Closing socket.")
#         sock.close()
#
#     time.sleep(5)









# json_string = """
# {
#     "0": {
#         "name": "Ford Prefect",
#         "species": "Betelgeusian"
#     },
#     "3": {
#         "name": "Ford Prefect2",
#         "species": "Betelgeusian"
#     }
# }
# """