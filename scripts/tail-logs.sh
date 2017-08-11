#!/bin/sh

groupName="$1"
streamName="$2"
end_time=$(($(date +"%s") * 1000))
aws logs get-log-events --log-group-name "$groupName" --log-stream-name "$streamName" --end-time $end_time | jq '.events[].message' -r


while :
do
    start_time=$end_time
    end_time=$(($(date +"%s") * 1000))
    aws logs get-log-events --log-group-name "$groupName" --log-stream-name "$streamName" --start-time $start_time --end-time $end_time | jq '.events[].message' -r
    sleep 1
done
