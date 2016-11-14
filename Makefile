REPORTER = nyan

install:
	curl -X PUT http://127.0.0.1:5984/gcusers
	curl -X PUT http://127.0.0.1:5984/gcusers/"admin" -d @account.json
