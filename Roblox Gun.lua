-- just for fun, i have no idea how to code in Roblox
local player = game.Players.LocalPlayer
local mouse = player:GetMouse()

script.Parent.Activated:Connect(function()
	print("Firing")
	local handle = script.Parent.Handle
	local currentOrientation = handle.Orientation
	handle.Orientation = Vector3.new(currentOrientation.X  + 10, currentOrientation.Y, currentOrientation.Z)
	script["half life 2 usp shoot"]:Play()
	script.Parent.Handle.MuzzleFlash.Enabled = true

	local target = mouse.Target
	if target and target.Parent:FindFirstChild("Humanoid") then
		if target.Name == "Head" then
			print("Headshot")
			script.Parent.RemoteEvent:FireServer(target.Parent, 100)
		else
			print("-10")
			script.Parent.RemoteEvent:FireServer(target.Parent, 10)
		end
	end
	
	wait(0.1)
	script.Parent.Handle.MuzzleFlash.Enabled = false
	wait(0.3)
	currentOrientation = handle.Orientation
	handle.Orientation = Vector3.new(currentOrientation.X - 10, currentOrientation.Y, currentOrientation.Z)
	
end)
