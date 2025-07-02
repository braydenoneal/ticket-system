# Ticket System

## API Paths

* /api
    * /user
        * get: list users
        * post: create
        * /custom_schema
            * get: get the one schema
            * patch: update the one schema
        * /:id
            * get: get user
            * patch: update
            * delete: delete
            * /session
                * post: create
                * /:id
                    * get: get session id and user
                    * delete: delete
            * /password_reset
                * post: create password reset for user
            * /team
                * get: list teams for user
                * post: add user to team
                * /:id
                    * get: get team
                    * delete: remove user from team
            * /ticket
                * get: list tickets for user
                * /:id
                    * get: get per user ticket info (watch, private notes)
                    * patch: update per user ticket info
            * /queue
                * get: list user queues
                * post: create queue for user
    * /team
        * get: list teams
        * post: create team
        * /:id
            * get: get team
            * patch: update team
            * delete: delete team
            * /queue
                * get: list team queues
                * post: create queue for team
            * /label
                * get: list team labels
                * post: create label for team
                * /:id
                    * get: get label
                    * patch: update
                    * delete: delete
            * /priority
                * get: list team priorities
                * post: create priority for team
                * /:id
                    * get: get priority
                    * patch: update
                    * delete: delete
            * /status
                * get: list team statuses
                * post: create status for team
                * /:id
                    * get: get status
                    * patch: update
                    * delete: delete
            * /user
                * get: list users in team
                * /:id
                    * get: get user in team info (team admin)
                    * patch: update user in team info
                    * delete: remove user from team
            * /ticket
                * get: list tickets for team
                * /type
                    * get: list team ticket types
                    * post: create team ticket type
                    * /:id
                        * get: get ticket type
                        * patch: update
                        * delete: delete
    * /ticket
        * get: list tickets
        * post: create ticket
        * /:id
            * get: get ticket
            * patch: update
            * delete: delete
            * /comment
                * get: list comments for ticket
                * post: create comment for ticket
                * /:id
                    * get: get comment
                    * patch: update
                    * delete: delete
            * /modification
                * get: list modifications for ticket
                * post: create ticket modification
                * /:id
                    * get: get ticket modification
    * /queue
        * get: list queues
        * /:id
            * get: get queue
            * patch: update
            * delete: delete
