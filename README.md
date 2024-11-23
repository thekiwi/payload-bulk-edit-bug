# Payload Bulk Edit Bug Reproduction

This is a minimal reproduction of a bug I'm seeing with Payload's bulk edit feature.

## About this repo

I created the project using `pnpx create-payload-app@latest`, added the `Things.ts` collection
and added the `Things` collection to the config. No other manual changes were made.

## Steps to Reproduce

1. Start Payload with a Postgres database
2. Log into Admin
3. Create a new thing, leave 'enabled' unchecked, but add an entry to the 'foos' array
4. View the list of things, you should see `1 Foos` for the new thing
5. Check the thing you just created and click "Edit" to start bulk editing
6. Toggle the 'enabled' field to true for the thing you just created
7. Click "Save"
8. Return to the list of things, you should see `0 Foos` for the thing you just edited
