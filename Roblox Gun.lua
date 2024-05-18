-- just for fun, i have no idea how to code in Roblox
local player = game.Players.LocalPlayer
local mouse = player:GetMouse()

script.Parent.Activated:Connect(function()
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
end)
