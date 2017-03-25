FROM alpine:edge

RUN echo http://nl.alpinelinux.org/alpine/edge/testing >> /etc/apk/repositories; \apk add --update --no-cache rethinkdb

VOLUME ["/data"]
WORKDIR /data
EXPOSE 2888
ENTRYPOINT ["rethinkdb"]
