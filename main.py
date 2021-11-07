import sys
import socket
import json
import time

# https://www.askpython.com/python/dictionary/python-dictionary-dict-tutorial

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

while True:
    # Create a TCP/IP socket
    print("Creating socket...")
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    # Connect the socket to the port where the server is listening
    server_address = ('192.168.1.100', 5001)
    # print >>sys.stderr, 'connecting to %s port %s' % server_address
    print("Connecting to {0[0]} port {0[1]}...".format(server_address))
    sock.connect(server_address)


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

            print("Json (type {}): {}".format(type(json_data), json_data))
            for key in json_data:
                print("Item found: {}".format(key))
                print("Device name: {}".format(json_data[key]['device_name']))
                print("Timestamp: {}".format(json_data[key]['timestamp']))
                print("L1 voltage: {} mV".format(json_data[key]['l1_voltage']))
                # TODO: mandar aqui para a interface flask

        else:
            print("Disconnected")

    finally:
        print("Closing socket.")
        sock.close()

    time.sleep(5)