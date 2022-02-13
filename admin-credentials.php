<div id="wpbody" role="main">
	<div class="wrap">
        <h1 id="add-new-user">Add Outlook App Credentials</h1>
        <form method="post" action="index.php">
            <table class="form-table" role="presentation">
                <tbody>
                    <tr class="form-field">
                        <th scope="row"><label for="user_login">client_id <span class="description">(required)</span></label></th>
                        <td><input name="client_id" type="text" id="user_login" value=""></td>
                    </tr>
                    <tr class="form-field">
                        <th scope="row"><label for="url">Scope (required)</label></th>
                        <td><input name="scope" type="text" id="url" class="code" value=""></td>
                    </tr>
                    <tr class="form-field">
                        <th scope="row"><label for="first_name">Redirect Url (required)</label></th>
                        <td><input name="redirect_uri" type="text" id="first_name" value=""></td>
                    </tr>
                    <tr class="form-field">
                        <th scope="row"><label for="email">Response Type</label></th>
                        <td><input name="response_type" type="text" id="email" value="code"></td>
                    </tr>
                    <tr class="form-field">
                        <th scope="row"><label for="last_name">Response Mode</label></th>
                        <td><input name="response_mode" type="text" id="last_name" value="query"></td>
                    </tr>

                    <tr class="form-field">
                        <th scope="row"><label for="url">State</label></th>
                        <td><input name="state" type="text" id="url" class="code" value="123456"></td>
                    </tr>
                </tbody>
            </table>
            <input type="submit" name="submit" class="button button-primary" value="Save">
        </form>
    </div>

    <button id="test">Click me!</button>

